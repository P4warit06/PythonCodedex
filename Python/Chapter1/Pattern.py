rows = 4  # number of rows
num = 1   # starting number

for i in range(1, rows + 1):
    # print leading spaces
    print("  " * (rows - i), end=" ")

    # print numbers in the row
    for j in range(i):
        print(f"{num} ", end="")
        num += 1

    print()  # move to the next line
