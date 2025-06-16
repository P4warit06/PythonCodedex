# Instructions

# Imagine you have a dataset 📊 with information about your favorite sports team.
# 🏀🎾⚽ The goal is to use Python's data structures to organize and analyze this data.

# If you can't think of any, feel free to use the 🏈 Super Bowl 2024 champions, the Kansas City Chiefs. 🏆

# As a data analyst for the Kansas City Chiefs you have been given a dataset containing information about the players, their positions, and some game statistics.

# Let's start analyzing!

# Create a list of dictionaries where each dictionary represents a player. Include attributes such as 'name,' 'position,' and 'jersey number.'
# Print out a list of all player positions in the dataset.
# Choose a player and update their game statistics in the dataset.
# Calculate the average statistics (e.g., yards gained, touchdowns) for all players and print the results.
# Congratulations for reaching the end of this chapter! Using data structures, you were able to organize and analyze data for the Chiefs. 😎 Think of all the things you can analyze!
# ✨ Just remember practice makes perfect. ✨

# In the next chapter, we'll explore file input/output in Python. Hope you can handle it! 👀

# Hit "Complete" to explore the next chapter

teams = [
    {
        "name": "Patrick Mahomes",
        "position": "Quarterback",
        "jerseys": "15",
        "yards_gained": 333,
        "touchdowns": 2,
        "interceptions": 0
    },
    {
        "name": "Travis Kelce",
        "position": "Tight End",
        "jerseys": "87",
        "yards_gained": 93,
        "touchdowns": 1,
        "receptions": 9
    },
    {
        "name": "Chris Jones",
        "position": "Defensive Tackle",
        "jerseys": "95",
        "tackles": 4,
        "sacks": 1,
        "interceptions": 0
    },
    {
        "name": "Isiah Pacheco",
        "position": "Running Back",
        "jerseys": "10",
        "yards_gained": 59,
        "touchdowns": 1,
        "receptions": 0
    },
    {
        "name": "Nick Bolton",
        "position": "Linebacker",
        "jerseys": "32",
        "tackles": 9,
        "sacks": 0,
        "interceptions": 1
    },
    {
        "name": "L'Jarius Sneed",
        "position": "Cornerback",
        "jerseys": "38",
        "tackles": 6,
        "interceptions": 0,
        "pass_deflections": 2
    },
    {
        "name": "Creed Humphrey",
        "position": "Center",
        "jerseys": "52",
        "snaps": 65,
        "penalties": 0
    },
    {
        "name": "Joe Thuney",
        "position": "Guard",
        "jerseys": "62",
        "snaps": 65,
        "penalties": 1
    },
    {
        "name": "Rashee Rice",
        "position": "Wide Receiver",
        "jerseys": "4",
        "yards_gained": 39,
        "touchdowns": 0,
        "receptions": 6
    },
    {
        "name": "Justin Reid",
        "position": "Safety",
        "jerseys": "20",
        "yards_gained": 0,
        "touchdowns": 0,
        "tackles": 5,
        "interceptions": 0
    }
]

def update_player_stats(team, player_name, stats):  
    for player in team:
        if player['name'] == player_name:
            player.update(stats)
            print(f"Updated stats for {player_name}: {player}")
            return
    print(f"Player {player_name} not found in the team.")
    
update_player_stats(teams, "Patrick Mahomes", {"yards_gained": 350, "touchdowns": 3}) #input the player name and the stats you want to update 
def average_statistics_for_all_player(team) :
    total_yards = 0
    total_touchdowns = 0
    total_tackles = 0
    total_sacks = 0
    total_interceptions = 0
    total_players = len(team)
    # loop check player statistics
    for player in team:
        if 'yards_gained' in player:
            total_yards += player['yards_gained']
        if 'touchdowns' in player:
            total_touchdowns += player['touchdowns']
        if 'tackles' in player:
            total_tackles += player['tackles']
        if 'sacks' in player:
            total_sacks += player['sacks']
        if 'interceptions' in player:
            total_interceptions += player['interceptions']

    average_yards = total_yards / total_players if total_players > 0 else 0
    average_touchdowns = total_touchdowns / total_players if total_players > 0 else 0
    average_tackles = total_tackles / total_players if total_players > 0 else 0
    average_sacks = total_sacks / total_players if total_players > 0 else 0
    average_interceptions = total_interceptions / total_players if total_players > 0 else 0

    print(f"Average Yards Gained: {average_yards}")
    print(f"Average Touchdowns: {average_touchdowns}")
    print(f"Average Tackles: {average_tackles}")
    print(f"Average Sacks: {average_sacks}")
    print(f"Average Interceptions: {average_interceptions}")
average_statistics_for_all_player(teams)
# Function to remove a player from the team
def remove_player(team, player_name):
    for player in team:
        if player['name'] == player_name:
            team.remove(player)
            print(f"Removed player: {player_name}")
            return
    print(f"Player {player_name} not found in the team.")
remove_player(teams, "Nick Bolton")
# Print all player positions in the dataset after remove data 
print('Player in Teams : ') 
for player in teams: 
    print(player['name'])
