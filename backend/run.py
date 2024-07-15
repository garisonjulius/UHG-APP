from flask import Flask
from langchain_openai import AzureChatOpenAI

from langchain_community.document_loaders import TextLoader

from langchain_openai import AzureOpenAIEmbeddings
from langchain.indexes import VectorstoreIndexCreator

app = Flask(__name__)

llm_model = AzureChatOpenAI(
    azure_deployment= "gpt-35-turbo",
)

loader = TextLoader("./test.txt")

embeddings =  AzureOpenAIEmbeddings(model = "text-embedding-ada-002")
index = VectorstoreIndexCreator(embedding=embeddings).from_loaders([loader])

@app.route('/')
def hello():
    print('Sending a test completion job')
    start_phrase = "who is the highest rated chess player in the world"
    response = index.query(start_phrase, llm_model)
    print(response)

    return start_phrase + ": " + response

if __name__ == '__main__':
    app.run(debug=True)











