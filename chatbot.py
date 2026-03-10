import sys
import ollama

prompt = sys.argv[1]

response = ollama.chat(
    model="llama3",
    messages=[{"role": "user", "content": prompt}]
)

print(response["message"]["content"])