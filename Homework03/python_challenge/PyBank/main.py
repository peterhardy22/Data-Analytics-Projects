# Import modules for local operating system and reading csv files
import os
import csv

# Display initial header and breaks
print(" ")
print("Financial Analysis")
print("----------------------------")

# Gain a path into our csv file
csvpath = os.path.join('budget_data.csv')

# Create variables for finding greatest increase and decrease
max_profit = 0
min_profit = 10000000
date_max = ""
date_min = ""
 

# Reading csv file
with open(csvpath, 'r') as csv_file:
    # Creating a csv reader object
    csv_reader = csv.reader(csv_file, delimiter=',')
    # Skips first row because of header
    next(csv_reader)

# Total number of months included in the data set
    # Create list to store months
    months = []
    # Iterate through each month in csv file
    for row in csv_reader:
        month = row[0]
        # Add each month to months list
        months.append(month)
        # Create variable to make csv index an integer to use greater/less than
        profit = int(row[1]) 
        # Check if this row is greater than the max
        if profit > max_profit:
            # If it is greater, then save it to max_profit
            max_profit = profit
            # Also grab date_max
            date_max = row[0]

        # Check if this row is less than the min
        if profit < min_profit:
            # If it is less than, then save it to min_profit
            min_profit = profit
            # Also grab the date_min
            date_min = row[0]

    # Find the sum of how many months are in the months list
    SumOfMonths = (len(months))
    # Print total months in data set
    print(f"Total Months: {SumOfMonths}")


# Reading csv file
with open(csvpath, 'r') as csv_file:
    # Creating a csv reader object
    csv_reader = csv.reader(csv_file, delimiter=',')
    # Skips first row because of header
    next(csv_reader)

# Net total amount of Profits/Losses over entire period
    # Create list to store profits/losses
    profits_losses = []
    # Iterate through each profit/loss in csv file
    for line in csv_reader:
        profit_loss = line[1]
        # Add each profit/loss to
        profits_losses.append(profit_loss)
    # Turn profits_losses list of strings in integers
    profits_losses = list(map(int, profits_losses))
    # Find the sum of how much profit/loss occured over the entire period
    SumOfProfitsLosses = (sum(profits_losses))
    # Print total profits/losses
    print(f"Total: ${SumOfProfitsLosses}")


# Reading csv file
with open(csvpath, 'r') as csv_file:
    # Creating a csv reader object
    csv_reader = csv.reader(csv_file, delimiter=',')
    # Skips first row because of header
    next(csv_reader)

# Average of the changes in Profits/Losses over entire period
    # Create list to store changes from profits_losses list
    changes = []
    # Define previous_month to start from first number in profits_losses list
    previous_month = profits_losses[0]
    # Create loop to iterate through profits_losses list
    for pl in profits_losses:
        # Make change equal to the current month minus the previous month
        change = pl - previous_month
        # Make the previous month equal to the next month to continue interation
        previous_month = pl
        # Add new values to changes list.
        changes.append(change)
    # Find the average change that occured over the entire period, pre rounded to 2 decimal points
    # subtract 1 from len(changes) because the first value is an outlier.
    PreAverageChange = (sum(changes) / (len(changes) - 1))
    # Rounds Average Change to 2 decimal points
    AverageChange = str(round(PreAverageChange, 2))
    # print the average change
    print(f"Average Change: ${AverageChange}")


# Reading csv file
with open(csvpath, 'r') as csv_file:
    # Creating a csv reader object
    csv_reader = csv.reader(csv_file, delimiter=',')
    # Skips first row because of header
    next(csv_reader)

    
# Greatest increase in profits (date and month) over entire period
    print(f"Greatest Increase in Profits: {date_max} (${max(changes)})")


# Greatest decrease in profits (date and month) over entire period
    print(f"Greatest Decrease in Profits: {date_min} (${min(changes)})")


    # OCD extra space for viewing output :)
    print(" ")