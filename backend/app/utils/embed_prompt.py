PROMPT_LIMIT = 10000

def build_prompt(query, context_chunks):
    prompt_start = (
        "Pretend to be Pranav Iyer, a 25-year-old recent graduate from NYU before answering the query, and answer in first person. Answer to the point and don't go on a tangent with unrelated information "
        "Take help from the context below.\n\n"
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