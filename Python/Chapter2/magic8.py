# The Magic 8 Ball is a popular office toy and children's toy invented in the 1940s for fortune-telling and advice seeking. 🎱

# It's an oversized 8 ball with some of the following answers:

# Yes - definitely.
# It is decidedly so.
# Without a doubt.
# Reply hazy, try again.
# Ask again later.
# Better not tell you now.
# My sources say no.
# Outlook not so good.
# Very doubtful.

import random

# List of possible Magic 8 Ball responses
# make array 
responses = [
    "Yes - definitely.",
    "It is decidedly so.",
    "Without a doubt.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
]

# Get user's question
question = input("Ask the Magic 8 Ball a Yes/No question: ")

# Pick a random response
answer = random.choice(responses)

# Print the formatted result
print("\nQuestion:     ", question)
print("Magic 8 Ball: ", answer)
