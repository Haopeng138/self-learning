import openai
import os


# Define OpenAI API key 

openai.api_key = os.getenv("OPENAI_API_KEY")
# Set up the model and prompt
model_engine = "text-davinci-003"


n = 1

while n :
    print("-----------------------------------")
    prompt = input(" Introzca tu pregunta:")
# Generate a response
    completion = openai.Completion.create(
        engine=model_engine,
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )

    response = completion.choices[0].text
    print(response)
    print("-----------------------------------",end="\n")