# Theme Park Planner

Theme Park Planner is a website where you can plan your travel itinerary when visiting a theme park.

## Table of Contents

* [Background](#background)
* [Technologies](#technologies)
* [Setup](#setup)
* [File Structure](#file-Structure)
* [Current State of the Project](#current-state-of-the-project)
* [Planned Features](#planned-features)
* [Project Expectation](#project-expectation)
* [Additional Information](#additional-information)

## Background

Theme parks are a very popular holiday destination these days. But when people go to the theme park, it is not difficult to find that too many visitors cause many attractions to have long wait time. This greatly reduces the experience of visitors. People generally wish to play as many attractions as possible in a theme parkWe, therefore, we want to make a website that can help people to plan a path that spend less time and maximize the number of attractions visited.

## Technologies

Project is created with:

- HTML
- CSS
- Less
- JavaScript
    - SortableJS
    - Muuri
	

## Setup

To run this project, install the package locally and open the webpage directly.

This is a website application, and all the packages that need are linked directly inside our JavaScript code, so there are no package needs to be installed.

## File Structure

```text
.                                   
│  .DS_Store                          
│  index.html                         
│  LICENSE                            
│  planner.html                       
│  README.md                                      
│                                     
├─css
│      index.css
│      index.css.map
│      index.less
│      map.css
│      nav.css
│      planner.css
│      planner.css.map
│      planner.less
│      signIn.css
│      signIn.less
│
├─data
│      coordinates.csv
│      official_pages.csv
│      ride_time.csv
│
├─html
│      planner.html
│      signIn.html
│      signUp.html
│
├─js
│      dropItem.js
│      map.js
│      nav.js
│      signup.js
│      start_plan.js
│
└─pics
    │  blue_square.png
    │  castle.png
    │  Component 1.png
    │  google_maps.png
    │  logo.png
    │
    └─thumbnails
            golden-zephyr.jpg
            ...

```

**css/:** The directory where all the `.css` file is located. Note that you should only edit the `.less` file, not the `.css`
file, unless a `.css` files has no corresponding `.less` file. When a `.less` file is edited, a new `.css` file of the same name
will be generated upon saving the `.less` file.

**data/**: This directory stores the miscellaneous data about the theme park attractions.
  - coordinates.csv: The longitude and latitude of the theme park attractions.
  - official_pages.csv: Contains link to the official website for each theme park attraction.

**html/:** The directory for the HTML file for planner page, sign in page, and sign up page.

## Current State of the Project

Currently, we have built a basic version of the webpage and a path finding algorithm based on java.

### Current Features of Web Page:

- First of all, this project introduces [Google Maps API](https://developers.google.com/maps/documentation) to implement many basic functions.
    - Lock and zoom in the latitude and longitude of the ride
    - Estimated waiting time
    - Map navigation function
    - ...
- Introduction page
    - top menu bar
- Planner page
    - A list of rides that shows the rides
    - An embedded Google Maps view of the theme park
    - A grid of rides that shows the favorite ride
    - A start planning button
        - this button is not linked with any algorithm, so it will only direct to the Planned Feature section of the Documentation
    - A blank area for showing the result
- Sign-in & Sign-up page
    - input frame for user information
    - login and register button
    - Regex check for input fields

## Planned Features

These are planned features that are not realized yet.
- Planner page
    - Choose different theme parks to start the plan.
    - Link the planner page's start planning button to the java path finding algorithm.
    - Show the final path plan at the bottom of the planning page.
- Sign-in & Sign-up pages
    - Deploy a simple database to support user registration and login functions

## Project Expectation

We plan for this project to implement a complete web page that supports path planning for the theme park to help the user to plan a most fit path for themselves to play around in a theme park. And this path planning algorithm should calculate a most efficient path that spend the least amount of time to visit as many attractions as possible base on the walking time between attractions inside theme park, wait time of each attraction and people's satisfaction (like people's favorite attractions in the park).

The team taking over this project is always free to add any factors they want to consider, and we've listed a few features that could be considered below.
### More Possible Features:
- Currently, we only support one theme park, the website could have a page for selecting theme parks to support more theme parks
- Normally, our algorithm only considers as many attractions as possible for visitors to play in a day from the park opening to closing, but not everyone wants to spend that long in a theme park, so we can add a time range limits and let users choose when to play in the theme park.
- we also could consider lunch break, shopping time, etc. so that the result schedule is not very tense.


## Additional Information

[Theme Park Planner Website Repo](https://github.com/RyanLiu2015/theme-park-planner)

[Theme Park Planner Website Demo](https://ryanliu2015.github.io/theme-park-planner/)

[ThemeParkOptimization (Backend Algorithm Repo)](https://github.com/gabrieldamotta/ThemeParkOptimization)

[Sprint Report 1](https://docs.google.com/document/d/1FenCx4UJEoytXLPMLJIsms-n5jz_mVhPRhcTN2iXSBQ/edit?usp=sharing)

[Sprint Report 2](https://docs.google.com/document/d/1LhulByOiTFEF6lzEY3AnQx7TR2efVtl2glJYrjZN6xk/edit?usp=sharing)

[Sprint Report 3](https://docs.google.com/document/d/1ywo-iODJaAFMimAEiowbcJiIxUfu_N6p2_qy4G9ZlDs/edit?usp=sharing)

