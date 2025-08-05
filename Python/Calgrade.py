score = int(input("Enter your score :"))
grade = ""
if score > 0 : 
    if score > 100:
        grade = "Invalid score"
if score >= 0:
    if score < 50:
        grade = "F"
if score >= 50:
    if score < 60:
        grade = "D"
if score >= 60:
    if score < 70:
        grade = "C"
if score >= 70:
    if score < 80:
        grade = "B"
if score >= 80:
    if score <= 100:
        grade = "A"

print("grade", grade)