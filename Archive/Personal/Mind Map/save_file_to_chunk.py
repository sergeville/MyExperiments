import os


def split_text(text, max_tokens):
    """
    Split text into chunks of max_tokens size.
    """
    words = text.split()
    chunks = []
    current_chunk = []
    current_length = 0

    for word in words:
        if current_length + len(word) + 1 > max_tokens:
            chunks.append(' '.join(current_chunk))
            current_chunk = [word]
            current_length = len(word) + 1
        else:
            current_chunk.append(word)
            current_length += len(word) + 1

    if current_chunk:
        chunks.append(' '.join(current_chunk))

    return chunks


def save_chunks(chunks, output_dir):
    """
    Save text chunks to separate files in the output directory.
    """
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    for i, chunk in enumerate(chunks):
        with open(os.path.join(output_dir, f'chunk_{i + 1}.txt'), 'w') as f:
            f.write(chunk)


def split_file(input_file, output_dir, max_tokens=9000):
    """
    Read input file, split its content, and save chunks to the output directory.
    """
    with open(input_file, 'r') as f:
        text = f.read()

    chunks = split_text(text, max_tokens)
    save_chunks(chunks, output_dir)


if __name__ == "__main__":
    input_file = 'MindMap.txt'  # Replace with your input file path
    output_dir = './'  # Replace with your desired output directory
    max_tokens = 9000  # Adjust the token limit as needed

    split_file(input_file, output_dir, max_tokens)
    print(f"File has been split and saved in the directory: {output_dir}")
