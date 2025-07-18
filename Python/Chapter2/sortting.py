# The Sorting Hat is a magical talking hat at Hogwarts School of Witchcraft and Wizardry. The hat decides which of the four "Houses" each first-year student goes to:

# 🦁 Gryffindor
# 🦅 Ravenclaw
# 🦡 Hufflepuff
# 🐍 Slytherin

# Write a program that asks the user some questions with the int() and input() functions:

# Q1) Do you like Dawn or Dusk?
#     1) Dawn
#     2) Dusk

# If answer is equal to 1, Gryffindor and Ravenclaw both get a +1.
# Else if answer is equal to 2, Hufflepuff and Slytherin both get a +1.
# Else, output the message "Wrong input."
# Q2) When I’m dead, I want people to remember me as:
#     1) The Good
#     2) The Great
#     3) The Wise
#     4) The Bold

# If the answer is 1, Hufflepuff +2.
# Else if answer is 2, Slytherin +2.
# Else if answer is 3, Ravenclaw +2.
# Else if answer is 4, Gryffindor +2.
# Else, output the message "Wrong input."
# Q3) Which kind of instrument most pleases your ear?
#     1) The violin
#     2) The trumpet
#     3) The piano
#     4) The drum

# If the answer is 1, Slytherin +4.
# Else if the answer is 2, Hufflepuff +4.
# Else if the answer is 3, Ravenclaw +4.
# Else if the answer is 4, Gryffindor +4.
# Else, output "Wrong input."
# Lastly, print out the score for each house.

# Bonus: If you want to go further, see if you can figure out how to print out the house with the most points!
def findHouse():
    firstQuestion = int(input("Do you like Dawn or Dusk? (1 for Dawn, 2 for Dusk): "))
    gryffindor = 0
    ravenclaw = 0       
    hufflepuff = 0
    slytherin = 0
    if firstQuestion == 1:
        gryffindor += 1
        ravenclaw += 1
    elif firstQuestion == 2:
        hufflepuff += 1
        slytherin += 1
    else:
        return "Wrong input."
    secondQuestion = int(input("When I’m dead, I want people to remember me as: (1 for The Good, 2 for The Great, 3 for The Wise, 4 for The Bold): "))
    if secondQuestion == 1:
        hufflepuff += 2
    elif secondQuestion == 2:
        slytherin += 2
    elif secondQuestion == 3:
        ravenclaw += 2
    elif secondQuestion == 4:
        gryffindor += 2
    else:
        return "Wrong input."
    thirdQuestion = int(input("Which kind of instrument most pleases your ear? (1 for The violin, 2 for The trumpet, 3 for The piano, 4 for The drum): "))
    if thirdQuestion == 1:
        slytherin += 4
    elif thirdQuestion == 2:
        hufflepuff += 4
    elif thirdQuestion == 3:
        ravenclaw += 4
    elif thirdQuestion == 4:
        gryffindor += 4
    else:
        return "Wrong input."
    scores = {
        "Gryffindor": gryffindor,
        "Ravenclaw": ravenclaw,
        "Hufflepuff": hufflepuff,
        "Slytherin": slytherin
    }
    # Find the house with the highest score
    max_points = max(scores.values())
    top_houses = [house for house, points in scores.items() if points == max_points]

    # Print the results
    print("Scores:")
    for house, points in scores.items():
        print(f"{house}: {points} points")
    print("House(s) with the most points:")
    print(", ".join(top_houses))
    return f"Gryffindor: {gryffindor}, Ravenclaw: {ravenclaw}, Hufflepuff: {hufflepuff}, Slytherin: {slytherin}"
findHouse()
print("Thank you for participating in the Sorting Hat Quiz!")
