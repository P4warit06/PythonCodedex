# With sets, you are one step closer to becoming a Python Data Manipulator. 🧗

# 🫐🍇🍌 Let’s go back to fruits! 🍓🍒🍎

# Grocery shopping is great until you forget what was on your list. 😥

# Before you head out, your best friend ask you to pick up some fruit for her too. Let's combine the lists!

# Create two sets representing your favorite fruits and your best friend's favorite fruits.
# Print the union of the two sets would look like.
# Print the intersection of the two sets.
# Have fun with it, check if the same fruit is in both sets or see the <difference> in both sets.

# Remember: tomatoes are fruits! 🍅

# After finishing, hit "Complete" to get started on the final exercise!

myfav_fruits = {'apple', 'banana', 'cherry', 'date', 'elderberry'}
friend_fav_fruits = {'banana', 'cherry', 'fig', 'grape', 'kiwi'}
combine = myfav_fruits.union(friend_fav_fruits) 
Intersection = myfav_fruits.intersection(friend_fav_fruits)
difference = myfav_fruits.difference(friend_fav_fruits)
print('Combined Fruits:', combine)
print('Intersection of Fruits:', Intersection)
print('Difference in Fruits:', difference)
# check conditions 
print('Is banana in both sets?', 'banana' in myfav_fruits and 'banana' in friend_fav_fruits)
print('Is apple in both sets?', 'apple' in myfav_fruits and 'apple' in friend_fav_fruits)
print('Is cherry in both sets?', 'cherry' in myfav_fruits and 'cherry' in friend_fav_fruits)
print('Is fig in both sets?', 'fig' in myfav_fruits and 'fig' in friend_fav_fruits)     