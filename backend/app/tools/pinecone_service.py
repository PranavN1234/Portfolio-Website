from pinecone import Pinecone
from app.tools.openai_service import get_embedding
import os
import re

PINECONE_API_KEY = os.environ.get('PINECONE_KEY')
print("key is", PINECONE_API_KEY)
pc = Pinecone(api_key=PINECONE_API_KEY)

def get_most_similar_chunks_for_query(query, recent_queries, index_name, top_k=5):
    combined_query = " | ".join(recent_queries[-2:] + [query])
    print(f'Combined Query: {combined_query}')
    print("\nEmbedding query using OpenAI ...")
    question_embedding = get_embedding(combined_query)

    print("\nQuerying Pinecone index ...")
    print("\nIndex name:", index_name)
    index = pc.Index(name=index_name)  # Ensure correct initialization of the Pinecone Index

    # Perform the query
    try:
        results = index.query(
            vector=question_embedding,
            top_k=top_k,
            include_values=False,  # Set to True if you want to retrieve the vector values
            include_metadata=True  # Include metadata for context
        )
        
        # Extract the most similar chunks from the results
        similar_chunks = [
            {
                "id": match['id'],
                "score": match['score'],
                "metadata": match['metadata']  # Assuming metadata contains useful information like text, page number, etc.
            }
            for match in results['matches']
        ]
        
        print(f"\nTop {top_k} most similar chunks retrieved from Pinecone:")
        for chunk in similar_chunks:
            print(f"ID: {chunk['id']}, Score: {chunk['score']}, Metadata: {chunk['metadata']}")
        
        return similar_chunks

    except Exception as e:
        print(f"Error querying Pinecone: {e}")
        return []