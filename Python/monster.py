while True :
    GoblinHealth = 100 
    sword =10 
    spear =20 
    shield = 30 
    print("Welcome to the Monster Game!")
    start = int(input("Do you want to start the game? (yes1/no2 ): "))
    if start == 1:
        print("You have entered the game.")
        print("You have 100 health points.")
        Round = int(input("How many rounds do you want to play? (1-5): "))
        
        
        while GoblinHealth > 0:
            action = int(input("Choose your action: (1) Sword, (2) Spear, (3) Shield: "))
            print("You can choose to attack with a sword (10 damage), spear (20 damage), or shield (30 damage).")
            if action == 1:
                GoblinHealth -= sword
                print(f"You attacked the Goblin with a sword! Goblin's health is now {GoblinHealth}.")
            elif action == 2:
                GoblinHealth -= spear
                print(f"You attacked the Goblin with a spear! Goblin's health is now {GoblinHealth}.")
            elif action == 3:
                GoblinHealth -= shield
                print(f"You attacked the Goblin with a shield! Goblin's health is now {GoblinHealth}.")
            else:
                print("Invalid action. Please choose again.")
            
            if GoblinHealth == 0:
                print("You defeated the Goblin!")
                break
            if GoblinHealth < 0 : 
                GoblinHealth +=20 
                print("Goblin Health is now ",GoblinHealth)
                
        if GoblinHealth != 0:   
            print("Goblin is still alive, Player Died !")
                
    else:
        print("Exiting the game. Goodbye!")
        break
    