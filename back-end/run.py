from flask import Flask
#from langchain_openai import AzureOpenAI
from langchain_openai import AzureChatOpenAI
 
 
from langchain_community.document_loaders import TextLoader
 
from langchain_openai import AzureOpenAIEmbeddings
from langchain.indexes import VectorstoreIndexCreator

 
from langchain_community.document_loaders import DirectoryLoader
import nltk
nltk.download('popular')

loader = DirectoryLoader('./data', glob="**/*.txt")
docs = loader.load()



app = Flask(__name__)
 
llm_model = AzureChatOpenAI(
    azure_deployment= "gpt-35-turbo",
)
 
embeddings =  AzureOpenAIEmbeddings(model="text-embedding-ada-002")
index = VectorstoreIndexCreator(embedding=embeddings).from_loaders([loader])
 
@app.route('/')
def hello():
    print('Sending a test completion job')
    # Context: The user's persona is Sara Hayes. She is 29, female, has a child, and has an income of $100,000. Her generic prescription spending is $50. The number of prescriptions she has is 3. The amount she has spent on emergency visits is $515. The amount she has spent on hospital benefits is $2225. She has spent $1120 on imaging. She has spent $74 on each of the specialist visits. She has spent $1500 on XRAYS. She has spent $148 on each of the doctor visits. She has had 8 labs and tests, 6 specialist visits, and 5 doctor visits. She is looking to maximize savings for her personal healthcare plan.
    # Task: Recommend a healthcare plan based on the data provided and provide reasoning for why this plan is superior. Take into account income and children when making your decision.
    # Exemplar: Please follow this example: Bob spent $15000 on generic medication last year. Since the cost of generic spending is least with the UHC Gold-X Advantage+ ($0 PCP, Adult Dental + Vision) plan, as it offers the lowest cost of $3 for generic medications before and after deductible.
    # Persona: Act like a healthcare insurance agent trying to preserve customer loyalty
    # Format: Say why you chose X plan over Y plan specifically for Sara

    start_phrase = "You are a healthcare insurance agent trying to ensure member loyalty for user, Sara Hayes. She is 29, female, has a child, and has an income of $100,000. Her generic prescription spending is $50. The number of prescriptions she has is 3. The amount she has spent on emergency visits is $515. The amount she has spent on hospital benefits is $2225. She has spent $1120 on imaging. She has spent $74 on each of the specialist visits. She has spent $1500 on XRAYS. She has spent $148 on each of the doctor visits. She has had 8 labs and tests, 6 specialist visits, and 5 doctor visits. She is looking to pay the minimum on healthcare each year. Recommend a healthcare plan based on the data provided and provide reasoning for why this plan is superior. Take into account income and children when making your decision. Please follow the format of: The reason X plan is better is because X plan offers a lower cost for category Z compared to Y and since Sara spends more on category Z, she would do well with a plan that maximizes savings there. Write the plan name at the top followed by the description as formatted by the example."
    response = index.query(start_phrase, llm_model)
    print(response)
 
    return start_phrase + ": " + response
 
if __name__ == '__main__':
    app.run(debug=True)