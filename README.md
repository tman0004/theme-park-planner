# Theme Park Planner

Theme Park Planner is a website where you can plan your travel itinerary when visiting a theme park.

## Table of Contents

* [Background](#background)
* [Technologies](#technologies)
* [Setup](#setup)
* [File Structure](#file-Structure)
* [Current State of the Project](#current-state-of-the-project)
* [Planned Features](#planned-features)
* [Additional Information](#additional-information)

## Background

## Technologies

Project is created with:

- HTML
- CSS
- Less
- JavaScript
    - SortableJS
    - Muuri

## Setup

To run this project, install it locally using npm:

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

- Introduction page
- Planner page
    - A list of rides that shows the rides
    - An embedded Google Maps view of the theme park
    - A grid of rides that shows the favorite ride
    - A start planning button
    - A blank area for showing the result
- Sign-in page
- Sign-up page
    - Regex check for input fields

## Planned Features

In this section, we list the features that are planned for this project for your reference.

## Additional Information

[Theme Park Planner Website Repo](https://github.com/RyanLiu2015/theme-park-planner)

[Theme Park Planner Website Demo](https://ryanliu2015.github.io/theme-park-planner/)

[ThemeParkOptimization (Backend Algorithm Repo)](https://github.com/gabrieldamotta/ThemeParkOptimization)

[Sprint Report 1](https://docs.google.com/document/d/1FenCx4UJEoytXLPMLJIsms-n5jz_mVhPRhcTN2iXSBQ/edit?usp=sharing)

[Sprint Report 2](https://docs.google.com/document/d/1LhulByOiTFEF6lzEY3AnQx7TR2efVtl2glJYrjZN6xk/edit?usp=sharing)

[Sprint Report 3](https://docs.google.com/document/d/1ywo-iODJaAFMimAEiowbcJiIxUfu_N6p2_qy4G9ZlDs/edit?usp=sharing)

