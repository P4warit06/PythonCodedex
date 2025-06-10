# If you slept through your geometry class, a Pythagorean theorem is the relationship between the three sides of a right triangle. It was named after the Greek philosopher Pythagoras, born around 570 BC.
# Pythagorean equation looks like:
# c = square root a^2 + b^2

# The a is the length of a short side.
# The b is the length of another short side.
# The c is the length of the hypotenuse.
# The hypotenuse is the longest side of the right triangle.

# Create a hypotenuse.py program that asks the user for two numbers, a and b, and then calculates the hypotenuse c.

# Bonus: If you are looking for a harder challenge, try the Quadratic formula
import math

def hypotenuse():
    a = float(input('Length of short side a: '))
    b = float(input('Length of short side b: '))
    c = math.sqrt(a**2 + b**2)
    return c

print("Hypotenuse is:", hypotenuse())
