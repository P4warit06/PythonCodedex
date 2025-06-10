for i in range(7):  # 7 lines
    # Draw the D
    if i == 0 or i == 6:
        d_part = "DDDDD"
    else:
        d_part = "D   D"
    
    # Draw the L
    if i == 6:
        l_part = "LLLLL"
    else:
        l_part = "L"

    print(f"{d_part:<6}{l_part}") 
