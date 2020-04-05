# Top Movies APP

## Project Overview:

This is an app where users can browse for top movies for the past couple years and genres.  In this ppp a user can navigate through the movies app while only using the arrow keys left/right and up/down.  Up/Down enables a user to scroll between movie shelves while the left/right keys scroll through individual movies on a specific genre shelf.  Once inside a page with movie details, a user can use the Enter button to toggle between favoriting a movie or removing it as a favorite.  A user can then press Escape to leave the movie details page and go back to the movie shelves.  Once a user is back browsing through different movie shelves, the user can see a heart on movie cards that they had favorited.  They will also see a new movie shelf with their favorite movies.


## Setup:
git clone [top-movies-api](https://github.com/foster55f/top-movies-api) and follow setup instructions

git clone this project directory and npm install, then run:
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Wins:
* This project was really exciting to be able to implement certain features:

### Home and Navigation
*  On Home page a user will see the following movie shelves:
    * Top of 2019
    * Top of 2018
    * Mystery Drama
    * Action
    * Fantasy
    * Thriller

* Shelves contain the movie tiles filtered for that shelf criterion
* Navigation between tiles and between shelves by keyboard arrow keys only

### Feature 1 - Details Page
* The user can press *ENTER* on a particular movie tile to view more details
* **Details** page should display the following:
    * Movie Poster  
    * Title
    * IMDB Rating
    * Genres
    * Year Released
    * Duration in minutes
    * Age Rating
    * Plot Summary
    * Director
    * Production Company
    * Stars
* The user can press *ESCAPE* to exit **Details** page

### Feature 2 - Favorites
* The user can indicate a movie as their favorite
* With **Details** page, a button in the **Details** page to add / remove favoriten with Enter button
* A *heart* or *star* on the movie tile to indicate that movie is a favorite

### Feature 3 - Favorite Shelf
* A shelf with only movies that the user has favorited
* The shelf only exist if the user has favorite movies

## Future Iterations:
* Continuing to add to user experience with UserLogin
* Add Search capability

## Working Demo:
![Home Page](https://user-images.githubusercontent.com/50148342/78511498-57adee80-775a-11ea-9be7-7cddfe1905d8.gif)

![MovieShowPage](https://user-images.githubusercontent.com/50148342/78511821-cd1abe80-775c-11ea-8456-988e4776e832.gif)

### GitHub:

[Foster Taylor](https://github.com/foster55f/)

