
def CurrencyChange(): 
    PeSos = float(input('What do you have left in pesos?'))
    SoLes = float(input('What do you have left in soles?'))
    ReAis = float(input('What do you have left in reais?'))
    
    pesosToUsd = 0.018
    solesToUsd = 0.27
    ReAisToUsd = 0.18
    totalUsd = (PeSos * pesosToUsd) + (SoLes * solesToUsd) + ( ReAis * ReAisToUsd)
    return round( totalUsd,1 )
    
print('Total All Dollar : ',CurrencyChange() , 'Dollar')
# # Example Class  
# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age

# p1 = Person("John", 36)

# print(p1.name)
# print(p1.age)