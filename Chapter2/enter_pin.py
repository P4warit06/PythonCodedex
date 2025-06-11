# print('BANK OF CODÉDEX')

# pin = int(input('Enter your PIN: '))

# while pin != 1234:
#   pin = int(input('Incorrect PIN. Enter your PIN again: '))

# if pin == 1234:
#   print('PIN accepted!')
def enter_pin():
    print('BANK OF CODÉDEX')
    pin = int(input('Enter your PIN: '))
    
    while pin != 1234:
        pin = int(input('Incorrect PIN. Enter your PIN again: '))
    
    if pin == 1234:
        print('PIN accepted!')
enter_pin()