# Instructions

# In chemistry, pH is a scale used to specify the acidity or basicity of a liquid. 🧪
# Create a ph_levels.py program that checks whether a pH level is basic, acidic, or neutral.

# First, create a ph variable and ask the user for a value between 0 and 14.

# Write an if, elif, else statement that:

# If ph is greater than 7, output "Basic".
# If ph is less than 7, output "Acidic".
# Else, output "Neutral".

def calPHlevel(): 
    level = float(input('Type your pH level here (0–14): '))
    if level < 0 or level > 14:
        return "⚠️ Invalid pH level. Please enter a value between 0 and 14."
    elif level > 7:
        return 'Basic'
    elif level < 7:
        return 'Acidic'
    else:
        return 'Neutral'

print('Your pH is:', calPHlevel())
