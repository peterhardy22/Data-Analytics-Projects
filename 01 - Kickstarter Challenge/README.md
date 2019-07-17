# Kickstarter Challenge

<p align="center">
 <img src="Images/kickstarter.PNG" width="500" align="middle")
 </p>


## Background

Over two billion dollars have been raised using the massively successful crowdfunding service, Kickstarter, but not every project has found success. Of the over 300,000 projects launched on Kickstarter, only a third have made it through the funding process with a positive outcome.

Since getting funded on Kickstarter requires meeting or exceeding the project's initial goal, many organizations spend months looking through past projects in an attempt to discover some trick to finding success. For this week's homework, you will organize and analyze a database of four thousand past projects in order to uncover any hidden trends.

- - -

## Instructions

![Kickstarter Table](Images/FullTable.PNG)

* Using the Kickstarter Table, I modified and analyzed the data of four thousand past Kickstarter projects as an attempt to uncover some of the market trends.

* I used conditional formatting to fill each cell in the `state` column with a different color, depending on whether the associated campaign was "successful," "failed," "cancelled," or is currently "live".

* I created a new column at column O called `percent funded` that uses a formula to uncover how much money a campaign made towards reaching its initial goal.

* I used conditional formatting to fill each cell in the `percent funded` column using a three-color scale. The scale starts at 0 as a dark shade of red, transitioning to green at 100, and then moving towards blue at 200.

* I created a new column at column P called `average donation` that uses a formula to uncover how much each backer for the project paid on average.

* I created two new columns, one called `category` at Q and another called `sub-category` at R, which use formulas to split the `Category and Sub-Category` column into two parts.

  ![Category Stats](Images/CategoryStats.PNG)

* I created a new sheet with a pivot table that analyzes the initial worksheet to count how many campaigns were "successful," "failed," "cancelled," or are currently "live" per **category**.

* I created a stacked column pivot chart that can be filtered by `country` based on the table created.

  ![Subcategory Stats](Images/SubcategoryStats.PNG)

* I created a new sheet with a pivot table that analyzes the initial sheet to count how many campaigns were "successful," "failed," "cancelled," or are currently "live" per **sub-category**.

* I created a stacked column pivot chart that can be filtered by `country` and `parent-category` based on the table created.

* The dates stored within the `deadline` and `launched_at` columns were using unix timestamps. Using a formula I convertd these timestamps into a normal date.

* I created a new column named `Date Created Conversion` that uses a formula to convert the data contained within `launched_at` into Excel's Date format.

* I create a new column named `Date Ended Conversion` that uses a formula to convert the data contained within `deadline` into Excel's Date format.

  ![Outcomes Based on Launch Date](Images/LaunchDateOutcomes.PNG)

* I created a new sheet with a pivot table with a column of `state`, rows of `Date Created Conversion`, values based on the count of `state`, and filters based on `parent category` and `Years`.

* Last, I created a pivot chart line graph that visualizes this new table.

- - -


# Still under construction...
* Create a new sheet with 8 columns: `Goal`, `Number Successful`, `Number Failed`, `Number Canceled`, `Total Projects`, `Percentage Successful`, `Percentage Failed`, and `Percentage Canceled`

  * In the `goal` column, create twelve rows with the following headers...

    * Less Than 1000
    * 1000 to 4999
    * 5000 to 9999
    * 10000 to 14999
    * 15000 to 19999
    * 20000 to 24999
    * 25000 to 29999
    * 30000 to 34999
    * 35000 to 39999
    * 40000 to 44999
    * 45000 to 49999
    * Greater than or equal to 50000

    ![Goal Outcomes](Images/GoalOutcomes.PNG)

  * Using the `COUNTIFS()` formula, count how many successful, failed, and canceled projects were created with goals within those ranges listed above. Populate the `Number Successful`, `Number Failed`, and `Number Canceled` columns with this data.

  * Add up each of the values in the `Number Successful`, `Number Failed`, and `Number Canceled` columns to populate the `Total Projects` column. Then, using a mathematic formulae, find the percentage of projects which were successful, failed, or were canceled per goal range.

  * Create a line chart which graphs the relationship between a goal's amount and its chances at success, failure, or cancellation.


- - -


