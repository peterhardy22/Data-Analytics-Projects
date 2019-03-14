# Import modules for local operating systemm reading csv files and using mode function
import os
import csv
import statistics

# Random space for nicer viewing in terminal :)
print(" ")

# Display initial header and breaks
print("Election Results")
print("----------------------------")

# Gain a path into our csv file
csvpath = os.path.join('poll_data.csv')


# Reading csv file
with open(csvpath, 'r') as csv_file:
    # Creating a csv reader object
    csv_reader = csv.reader(csv_file, delimiter=',')
    # Skips first row because of header
    next(csv_reader)

# Find Total number of votes cast
    # Create list to store votes
    votes = []
    # Iterate through each voter_id in csv file
    for row in csv_reader:
        # Find voter_id in first column of csv file
        voter_id = row[0]
        # Add each voter_id to votes list
        votes.append(voter_id)
    # Find the sum of how many voter_id are in the votes list
    SumOfVotes = (len(votes))
    
    print(f"Total Votes: {SumOfVotes}")
    # Display break
    print("----------------------------")


# Reading csv file
with open(csvpath, 'r') as csv_file:
    # Creating a csv reader object
    csv_reader = csv.reader(csv_file, delimiter=',')
    # Skips first row because of header
    next(csv_reader)
  
# Complete List of candidates who recieved votes
    # Create list to store candidates names
    candidates_list = []
   
    # Iterate through each candidate in csv file
    for row in csv_reader:
        # Find candidate in third column of cscv file
        candidate = row[2]
        # Add each candidate name to candidates_list
        candidates_list.append(candidate)
    # Convert list to a set to find unique values and turn them back into
    # a list that is alphabetically sorted
    candidates_list = list(sorted(set(candidates_list)))
    
    # Define candidate variables
    candidate1 = candidates_list[0]
    candidate2 = candidates_list[1]
    candidate3 = candidates_list[2]
    candidate4 = candidates_list[3]


# Reading csv file
with open(csvpath, 'r') as csv_file:
    # Creating a csv reader object
    csv_reader = csv.reader(csv_file, delimiter=',')
    # Skips first row because of header
    next(csv_reader)

# Create list of Correy votes
    Correy = []
    #Iterate through csv file to grab sepcific votes cast for specific candidates
    for row in csv_reader:
        if("Correy" == row[2]):
            Correy.append("Correy") 

# Reading csv file
with open(csvpath, 'r') as csv_file:
    # Creating a csv reader object
    csv_reader = csv.reader(csv_file, delimiter=',')
    # Skips first row because of header
    next(csv_reader)

# Create list of Khan votes
    Khan = []
    #Iterate through csv file to grab sepcific votes cast for specific candidates   #
    for row in csv_reader:
        if("Khan" == row[2]):
            Khan.append("Khan") 

# Reading csv file
with open(csvpath, 'r') as csv_file:
    # Creating a csv reader object
    csv_reader = csv.reader(csv_file, delimiter=',')
    # Skips first row because of header
    next(csv_reader)

# Create list of Li votes
    Li = []
    #Iterate through csv file to grab sepcific votes cast for specific candidates
    for row in csv_reader:
        if("Li" == row[2]):
            Li.append("Li") 

# Reading csv file
with open(csvpath, 'r') as csv_file:
    # Creating a csv reader object
    csv_reader = csv.reader(csv_file, delimiter=',')
    # Skips first row because of header
    next(csv_reader)

# Create list of O'Tooley votes
    OTooley = []
    #Iterate through csv file to grab sepcific votes cast for specific candidates
    for row in csv_reader:
        if("O'Tooley" == row[2]):
            OTooley.append("O'Tooley") 

    # Define variables for candidate voting percentages
    candidate1_percentage = (int(len(Correy)) / SumOfVotes) * 100
    candidate2_percentage = (int(len(Khan)) / SumOfVotes) * 100
    candidate3_percentage = (int(len(Li)) / SumOfVotes) * 100
    candidate4_percentage = (int(len(OTooley)) / SumOfVotes) * 100


# Reading csv file
with open(csvpath, 'r') as csv_file:
    # Creating a csv reader object
    csv_reader = csv.reader(csv_file, delimiter=',')
    # Skips first row because of header
    next(csv_reader)

# Create list to store candidates
    candidates = []
    # Iterate through each candidate namer in csv file
    for row in csv_reader:
        c = row[2]
        # Add each voter_id to votess list
        candidates.append(c)


# Print candidate1 name, percentage of votes and total votes
print(f"{candidate1}: {round(candidate1_percentage)}% ({len(Correy)})")
# Print candidate2 name, percentage of votes and total votes
print(f"{candidate2}: {round(candidate2_percentage)}% ({len(Khan)})")
# Print candidate3 name, percentage of votes and total votes
print(f"{candidate3}: {round(candidate3_percentage)}% ({len(Li)})")
# Print candidate4 name, percentage of votes and total votes
print(f"{candidate4}: {round(candidate4_percentage)}% ({len(OTooley)})")

# Display break in page
print("----------------------------")

# Print poll winner
print(f"Winner: {statistics.mode(candidates)}")

# Display break in page
print("----------------------------")
# Random space for nicer viewing in terminal :)
print(" ")
