# Since 1927, "The Cyclone" roller coaster has 
# delighted visitors at Coney Island (Brooklyn, NY). 🎢

# They're now installing a new entry system 
# (the height requirement is 137 cm and the cost is 10 credits) 
# and need your help writing the program for it!

# Create a new file called the_cyclone.py.

# Ask the user what their height is
# and how many credits they have, 
# and store the values in a height variable and a credits variable.

# Use a combination of relational 
# and logical operators to create the rules:

# If they are tall enough and have enough credits, print "Enjoy the ride!"
# Else if they have enough credits, but they aren't tall enough, print "You are not tall enough to ride."
# Else if they are tall enough, but they don't have enough credits, print "You don't have enough credits."
# Else, print a message saying they have not met either requirement.

def cyclone():
        height = float(input("What is your height in cm? "))
        credits = int(input("How many credits do you have? "))
        if height >= 137 and credits >= 10:
            return "Enjoy the ride!"
        elif credits >= 10:
            return "You are not tall enough to ride."
        elif height >= 137:
            return "You don't have enough credits."
        else:
            return "You have not met either requirement."
            
print("Welcome to The Cyclone!" , cyclone())