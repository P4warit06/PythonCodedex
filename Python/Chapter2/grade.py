def CalculatorGrade():
    point = int(input('Type your Score Here.. : '))
    if point > 55:
        return 'You Passed 🥳'
    else:
        return 'You Failed 😢'

# Show result
print('Your Result is:', CalculatorGrade(), )
