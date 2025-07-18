def CalculatorBMI():
    height = float(input('Your Height now  :'))
    weight = float(input('Your Weight now  :'))
    if height > 100: 
        height = height / 100
    
    BMI = weight  / ( height ** 2) 
    return BMI

print("Your BMI is:", CalculatorBMI())   