from flask import Flask
import os
from openai import AzureOpenAI

app = Flask(__name__)

client = AzureOpenAI(
    api_key=os.getenv("AZURE_OPENAI_API_KEY"),
    api_version="2024-02-01",
    azure_endpoint=os.getenv("AZURE_OPENAI_ENDPOINT")
)

deployment_name='gpt-35-turbo-instruct'

@app.route('/')
def hello():
    print('Sending a test completion job')
    start_phrase = 'Who is United Health Group?'
    response = client.completions.create(model=deployment_name, prompt=start_phrase, max_tokens=128)
    # See how the API responds in terminal
    print(response.choices[0])
    return start_phrase+response.choices[0].text

if __name__ == '__main__':
    app.run(debug=True)