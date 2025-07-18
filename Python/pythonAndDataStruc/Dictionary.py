# Instructions

# 🍎 Welcome to NYC! 🗽

# As one of the cultural capitals of the world, NYC is the home of the Met Museum.

# It has one of the biggest art collections in the world! 🗺️

# Let’s catalog an artifact from the museum! 🖼️ 👩‍🎨

# First, search the Met Museum site for your favorite artifact. Scroll to "Artwork Details" and let's start cataloging.

# On the Python editor, create a dictionary with the information of your artifact, including:

# artist
# period
# date
# Lastly, print the dictionary. What do you see? What if we just want to print the keys, or the values?
#  We can look it like array in js 
Artifact = {
    "artist": "Vincent van Gogh",
    "period": "Post-Impressionism",
    "date": "1889",
    "title": "Starry Night"
}
print("Artifact Dictionary:", Artifact['artist'])
print("Keys:", Artifact.keys())   # print All keys in the dictionary   ,  artist , period , date , title 
print("Values:", Artifact.values()) # print All values in the dictionary  , Vincent van Gogh, Post-Impressionism, 1889, Starry Night 
print("Items:", Artifact.items()) # print All items in the dictionary , artist : Vincent van Gogh, period : Post-Impressionism, date : 1889, title : Starry Night 
# You can access specific values using the keys