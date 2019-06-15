# Unit 16 | Assignment - Data Journalism and D3

![Newsroom](https://media.giphy.com/media/v2xIous7mnEYg/giphy.gif)

## Background

Welcome to the newsroom! You've just accepted a data visualization position for a major metro paper. You're tasked with analyzing the current trends shaping people's lives, as well as creating charts, graphs, and interactive elements to help readers understand your findings.

The editor wants to run a series of feature stories about the health risks facing particular demographics. She's counting on you to sniff out the first story idea by sifting through information from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System.

The data set included with the assignment is based on 2014 ACS 1-year estimates: [https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml](https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml), but you are free to investigate a different data set. The current data set incldes data on rates of income, obesity, poverty, etc. by state. MOE stands for "margin of error."

### Level 1: D3 Dabbler

![4-scatter](Images/4-scatter.jpg)

Create a scatter plot between two of the data variables such as `Healthcare vs. Poverty` or `Smokers vs. Age`.

The scatter plot represents each state with circle elements. This graphic was coded in the `app.js` file and the data was pulled in from `data.csv` by using the `d3.csv` function.

* Includes state abbreviations in the circles.

* Situated axes and labels to the left and bottom of the chart.

- - -

### Level 2: Impress the Boss (Optional Challenge Assignment)

Why make a static graphic when D3 lets you interact with your data?

![7-animated-scatter](Images/7-animated-scatter.gif)

#### 1. More Data, More Dynamics

Placed additional labels in the scatter plot and gave them click events so that users can decide which data to display. Animated the transitions for the circles' locations as well as the range of the axes.


#### 2. Incorporate d3-tip

While the ticks on the axes allow us to infer approximate values for each circle, it's impossible to determine the true value without adding another layer of data. Enter tooltips: developers can implement these in their D3 graphics to reveal a specific element's data when the user hovers their cursor over the element. Added tooltips to the circles so each tooltip displays with the data that the user has selected. Used the `d3-tip.js` plugin developed by [Justin Palmer](https://github.com/Caged)

![8-tooltip](Images/8-tooltip.gif)


- - -
