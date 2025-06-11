def guess(): 
    while True: 
        guessPlayerInput = int(input("Please enter your guess: "))
        if guessPlayerInput == 6:
            print("Congratulations, you guessed the number!")
            break
        else:
            print("Wrong number, please try again.")
    print("Game Over")

guess()