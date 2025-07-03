rating = 2 
def ratingSystem(point):
  if point > 4.5:
    print("Extraordinary")
  elif point > 4:
    print("Excellent")
  elif point > 3: 
    print("Good")
  elif point > 2 : 
    print("Fair")
  else :
    print("Poor")
ratingSystem(rating)