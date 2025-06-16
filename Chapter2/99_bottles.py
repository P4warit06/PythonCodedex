# Instructions

# "99 Bottles of Beer" is an old song that annoying kids, oops I mean everyone, sang on road trips to pass the time.
# Create a 99_bottles.py program and use a for loop and a range() function to print out all the verses of "99 Bottles of Beer."
def bottles_of_beer():
    for i in range(99, 0, -1):
        if i > 1:
            print(f"{i} bottles of beer on the wall, {i} bottles of beer.")
            print(f"Take one down and pass it around, {i-1} bottles of beer on the wall.\n")
        else:
            print(f"{i} bottle of beer on the wall, {i} bottle of beer.")
            print("Take one down and pass it around, no more bottles of beer on the wall.\n")
    
    print("No more bottles of beer on the wall, no more bottles of beer.")
    print("Go to the store and buy some more, 99 bottles of beer on the wall.")
bottles_of_beer()