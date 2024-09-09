PROMPT_LIMIT = 10000

def build_prompt(query, context_chunks):
    prompt_start = (
        "Answer in 50 words at max, if you can make it 100 words with the context below or around that range nothing more."
        "Take help from the context below. Whatever you do, don't make anything up. Respond with a negative if the context doesn't have the required information in a polite way\n\n"
        "Context:\n"
    )

    prompt_end = f"\n\nQuestion: {query}\nAnswer:"
    prompt = prompt_start

    for chunk in context_chunks:
        # Extract text and description from chunk's metadata
        chunk_text = chunk['metadata'].get('text', '') if 'metadata' in chunk else ''
        chunk_description = chunk['metadata'].get('description', '') if 'metadata' in chunk else ''
        
        # Combine description and text if both are available
        combined_text = f"{chunk_description}\n\n{chunk_text}" if chunk_description else chunk_text
        
        if len(prompt + "\n\n---\n\n" + combined_text + prompt_end) > PROMPT_LIMIT:
            break
        
        prompt += "\n\n---\n\n" + combined_text

    prompt += prompt_end

    return prompt