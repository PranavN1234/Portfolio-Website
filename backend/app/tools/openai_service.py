import os
import json
import requests

OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')
OPENAI_EMBEDDING_MODEL = 'text-embedding-ada-002'
CHATGPT_MODEL = 'gpt-4o-mini'

def get_embedding(chunk):
    url = 'https://api.openai.com/v1/embeddings'
    headers = {
      'content-type': 'application/json; charset=utf-8',
      'Authorization': f"Bearer {OPENAI_API_KEY}"
    }
    data = {
      'model': OPENAI_EMBEDDING_MODEL,
      'input': chunk
    }
    response = requests.post(url, headers=headers, data=json.dumps(data))
    response_json = response.json()
    embedding = response_json["data"][0]["embedding"]
    return embedding

conversation_history = []
def get_llm_answer(prompt):
    global conversation_history
    # Append the user's message to the conversation history
    conversation_history.append({"role": "user", "content": prompt})

    # Prepare the messages to send, starting with any system messages
    messages = [{"role": "system", "content": "You are Pranav Iyer, a recent graduate from NYU who is about 25 years old. Answer questions like him and not like a bot"}]
    # Extend with the conversation history
    messages.extend(conversation_history)


    url = 'https://api.openai.com/v1/chat/completions'
    headers = {
        'content-type': 'application/json; charset=utf-8',
        'Authorization': f"Bearer {OPENAI_API_KEY}"
    }
    data = {
        'model': CHATGPT_MODEL,
        'messages': messages,
        'temperature': 0.1,
        'max_tokens': 3000
    }
    response = requests.post(url, headers=headers, data=json.dumps(data))


    response_json = response.json()
    completion = response_json["choices"][0]["message"]["content"]

    print("completion:", completion)
    conversation_history.append({"role": "assistant", "content": completion})

    return completion