# Thanks to the internet, we can connect with friends across the world. 🧑‍🤝‍🧑

# When you and your friends are scattered across different cities, sharing locations is something that can help you feel closer. 🫶

# Let's use latitude and longitude 🌐 to create tuples of our friends locations!

# Create a tuple for the city you are in.
# Create 3 tuples for your friends, each with the latitude and longitude of the cities they live in.
# Print the locations of all your friends.
# Which of your friends is the furthest away?

# Hit "Complete" to feel closer than ever with your friends. 🥰

# Bonus: See if you can combine all the tuples into one tuple.
import math

# Function to calculate haversine distance (in kilometers)
def haversine(coord1, coord2):
    R = 6371  # Earth radius in km

    lat1, lon1 = coord1
    lat2, lon2 = coord2

    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)

    a = (math.sin(dlat/2)**2 +
         math.cos(math.radians(lat1)) *
         math.cos(math.radians(lat2)) *
         math.sin(dlon/2)**2)

    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))

    return R * c

# My location
my_country = (40.7128, -74.0060)  # New York City

# Friends' locations
friend1 = ((34.0522, -118.2437), 'Los Angeles')
friend2 = ((51.5074, -0.1278), 'London')
friend3 = ((35.6895, 139.6917), 'Tokyo')

# All friends
friends = [friend1, friend2, friend3]

# Find the farthest friend
max_distance = 0
farthest_friend = None

for location, name in friends:
    distance = haversine(my_country, location)
    print(f"Distance to {name}: {distance:.2f} km")
    if distance > max_distance:
        max_distance = distance
        farthest_friend = (name, distance)

print("\nMy location:", my_country)
print(f"{farthest_friend[0]} is the furthest away at {farthest_friend[1]:.2f} km.")
