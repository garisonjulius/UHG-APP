from flask import Flask
from langchain_openai import AzureOpenAI
from langchain_community.document_loaders import TextLoader
from langchain_openai import AzureOpenAIEmbeddings
from langchain.indexes import VectorstoreIndexCreator

app = Flask(__name__)

llm_model = AzureOpenAI(
    deployment_name="gpt-35-turbo-instruct",
)
loader = TextLoader("./test.txt")
docs = loader.load()

embeddings =  AzureOpenAIEmbeddings(model = "text-embedding-ada-002")
index = VectorstoreIndexCreator(embedding=embeddings).from_loaders([loader])

@app.route('/')
def hello():
    print('Sending a test completion job')
    start_phrase = "Who's is the user"
    response = index.query(start_phrase, llm = llm_model)
    print(response)

    return start_phrase + ": " + response

if __name__ == '__main__':
    app.run(debug=True)











