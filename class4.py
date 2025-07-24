def calculatorGrade(score): 
    if score >= 80: 
       print("A")
    elif score >= 70:
        print("B")
    elif score >= 60:
        print("C")
calculatorGrade(90)
# -----------------------------------
def mySum(a,b,c,d,e):
    return a+b+c+d+e

result = mySum(20,30,40,50,60)
print(result)
# -----------------------------------


# Mini Workshop 
def summation(quantity, price):
    total =  quantity * price
    vat = total * 0.07
    allPrice  = total + vat
    return allPrice
# -----------------------------------
def choose_Menu():
    while True: 
        choice = int(input("Enter your choice (1 For cal) , (2 For Exit ): "))
        if choice ==1 : 
            quantity = int(input("Enter the quantity: "))
            price = float(input("Enter the price: "))
            print("Total is: ", summation(quantity, price))
        if choice == 2:
            print("Exiting the program.")
            break    
choose_Menu()
# -----------------------------------