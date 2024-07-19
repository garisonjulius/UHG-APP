from flask import Flask
from united_health import app
from langchain_openai import AzureChatOpenAI
from langchain_community.document_loaders import TextLoader
#from langchain_community.document_loaders import PyPDFLoader
#from langchain_community.document_loaders import DirectoryLoader
from langchain_openai import AzureOpenAIEmbeddings
from langchain.indexes import VectorstoreIndexCreator

llm_model = AzureChatOpenAI(
    azure_deployment= "gpt-35-turbo",
)

loader = TextLoader("./backend/healthplan.txt")

# loader = PyPDFLoader("./test.pdf")
# pages = loader.load_and_split()

#loader = DirectoryLoader('./test-folder-pdf', glob = '**/*.pdf')
#docs = loader.load()

embeddings =  AzureOpenAIEmbeddings(model = "text-embedding-ada-002")
index = VectorstoreIndexCreator(embedding=embeddings).from_loaders([loader])

@app.route('/')
def hello():
    print('Sending a test completion job')
    start_phrase = "what is the overall deductible for plan 1"
    response = index.query(start_phrase, llm_model)
    print(response)

    return start_phrase + ": " + response

if __name__ == '__main__':
    app.run(debug=True)

