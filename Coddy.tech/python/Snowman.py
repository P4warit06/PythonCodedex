# Create a function named build_snowman that receives base, middle, top, and temperature as its parameters.
# The function simulates a carpenter building a snowman
# in their chilly workshop. 
# It should concatenate the three parts of the snowman and adjust it based on the temperature.
# Follow these steps to build the snowman:
# Concatenate the base, middle, and top strings in this order.
# If the temperature is below 0°C, add one "!" at the end of the string for each degree below zero.
# If the temperature is above 0°C, remove one character from the end of the string for each degree above zero.

# Parameters:
# base (str): The string representing the base of the snowman.
# middle (str): The string representing the middle part of the snowman.
# top (str): The string representing the top of the snowman.
# temperature (int): The current temperature in the workshop in Celsius.
# The function returns a string representing the final snowman.
def build_snowman(base, middle , top , temperature):
    # Concatenate the parts of the snowman
    snowman = base + middle + top
    
    # Adjust the snowman based on the temperature
    if temperature < 0:
        # Add "!" for each degree below zero
        snowman += '!' * abs(temperature)
    elif temperature > 0:
        # Remove characters for each degree above zero
        snowman = snowman[:-temperature]
    
    return snowman
snowman(OO
oo
o
-1)