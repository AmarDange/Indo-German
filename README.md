# [Indo German (PP5)](https://indo-german-932e214b60bd.herokuapp.com/)

## PERSPECTIVE

The main reason behind this website is to help or provide information to immigrants in Germnay or India.
The main motive is to provide information about eduation, Places to visit, food, Visa. The attempt of the project is to create a social media App to connect people who wish to help others who are coming to germany or india. Some base points are shared on this App where people get basic idea from India and germany.

**Indo-German** is a social-media app designed to mimic the features of Twitter. Users can create an account, log in, make a post, make comments on posts, like other user's posts and comments, and change their profile photo and profile biography. This website is designed to allow users to make posts about incomparable suggetion/information as an expat, tourist and be able to engage with other users by commenting and liking on other posts/comments. This is the combined repository for the React frontend of Indo German and backend DRF, created with HTML, CSS, Bootstrap, React. Components were reused throughout the React project as each part of the website was broken into individual components and linked together, transferring states and data. The project also utilises a Django Rest Framework web API.

![Screenshot of Am I Responsive](frontend/docs/features/amiresponsive.PNG)

## Deployed Link

- [Front-End Deployed Link](https://indo-german-932e214b60bd.herokuapp.com/)

## GitHub Link

- [GitHub Link](https://github.com/AmarDange/Indo-German)

## [Contents](#contents)

- [Indo German (PP5)](#indo-german-pp5)
  - [PERSPECTIVE](#perspective)
  - [Deployed Link](#deployed-link)
  - [GitHub Link](#github-link)
  - [Contents](#contents)
  - [User Experience DRF Backend (UX)](#user-experience-drf-backend-ux)
    - [Project Structure](#project-structure)
    - [User Stories](#user-stories)
    - [Database Model](#database-model)
  - [User Experience React Frontend (UX)](#user-experience-react-frontend-ux)
    - [Site Goals](#site-goals)
    - [Scope](#scope)
  - [Epics and User Stories](#epics-and-user-stories)
    - [1. Website UI](#1-website-ui)
    - [2. Authentication](#2-authentication)
    - [3. Navigation](#3-navigation)
    - [4. General](#4-general)
    - [5. Post Management](#5-post-management)
    - [6. Comment Management](#6-comment-management)
    - [7. Likes Management](#7-likes-management)
    - [8. Profile Management](#8-profile-management)
  - [Agile Development](#agile-development)
    - [Kanban Board and MosCow Prioritization](#kanban-board-and-moscow-prioritization)
    - [Outline of Sprints](#outline-of-sprints)
      - [Sprint 1 - Project Setup](#sprint-1---project-setup)
      - [Sprint 2 - Making a Post](#sprint-2---making-a-post)
      - [Sprint 3 - Likes, Comments and Profile page](#sprint-3---likes-comments-and-profile-page)
      - [Sprint 4 - General feature, styling and deployment](#sprint-4---general-feature-styling-and-deployment)
    - [Tasks](#tasks)
  - [Design](#design)
    - [Colours](#colours)
    - [Typography](#typography)
    - [Imagery](#imagery)
    - [Wireframes](#wireframes)
  - [Features](#features)
    - [Existing Features](#existing-features)
    - [NavBar](#navbar)
    - [Sign Up Link and Form](#sign-up-link-and-form)
    - [Sign In Link and Form](#sign-in-link-and-form)
    - [Post Section (Home)](#post-section-home)
    - [Left panel](#left-panel)
    - [Search Feature](#search-feature)
    - [Popular Profiles](#popular-profiles)
    - [Feed page](#feed-page)
    - [Liked page](#liked-page)
    - [Comments Section](#comments-section)
    - [Post Create Form](#post-create-form)
    - [Post Edit Form](#post-edit-form)
    - [Like](#like)
    - [Post Detail Page](#post-detail-page)
    - [Profile Page](#profile-page)
    - [Delete modal and Alert message](#delete-modal-and-alert-message)
  - [Components](#components)
  - [Technologies](#technologies)
    - [Languages Used](#languages-used)
    - [Tools](#tools)
    - [Frameworks, Libraries and Programs](#frameworks-libraries-and-programs)
  - [Production](#production)
  - [Issues and Fixes](#issues-and-fixes)
  - [Testing](#testing)
  - [Deployment](#deployment)
    - [Heroku](#heroku)
    - [Connecting to API](#connecting-to-api)
    - [Final Deployment](#final-deployment)
  - [Credits and Resources](#credits-and-resources)
  - [Acknowledgements](#acknowledgements)

## User Experience DRF Backend (UX)

### Project Structure

The overall structure of the project was modelled from from the [drf-api](https://github.com/Code-Institute-Solutions/drf-api) walktrhough. This is to be expected since the walkthrough follows an industry standard way of implementing an API. In addition, the strucutre of the serializer, model, and url files are also adapted from the walkthrough since this is the "pythonic" way of implementing an API using the Django REST framework.

### User Stories

- Authentication

  1. As a **user** I **cannot edit/delete posts/comments/likes that are not mine** so that **I can be assured that my posts/comments/likes are protected and can only be changed by me.**

     - This user story is achieved by creating custom permissions that will stop users from deleting, editing, unliking/liking posts/comments that are not done by themselves.

  2. As a **user** I can **see whether I am logged in or not** so that **I will know if I will need to log in if I am not.**

     - This user story is achieved by showing the username created in Profile after the user signs up and logs in using Django's all-auth.

  3. As a **user** I can **sign up easily with just a username and password** so that **I have the ability to create posts or comments without having to share my email address.**

     - This user story is achieved by using Django's all-auth.

  4. As a **user** I can **easily log out** so that **I can have more security on my account.**

     - This user story is achieved by using Django's all-auth.

  5. As a **user** I can **easily log in** so that **I can quickly post, add more comments, or delete content if I wish.**

     - This user story is achieved by using Django's all-auth.

  6. As a **user** I can **only like/unlike other user's posts and comments** so that **I can only show my appreciation for other posts/comments and not cheat the system by liking my own posts/comments.**

     - This user story is achieved by creating the Comment Likes and Post Likes models to like other user's content. Custom permissions are created to allow users to only like other users' posts/comments.

  7. As a **user** I can **only follow other users** so that **I cannot cheat the system and follow myself and gain myself a new, false follower.**

     - This user story is achieved by creating the Follower model to follow other users. A custom permission is created to stop users from following themselves.

- Posts

  1. As a **user** I can **create new posts** so that **I can share images, my experience.**

     - This user story is achieved by creating the Post model. Users can add images, content
     - and a title to posts.

  2. As a **user** I can **edit posts** so that **I can change my posts, images, etc whenever I change my mind about what I posted or wish to remove/add details.**

     - This user story is achieved by using generics. RetrieveUpdateDestroyAPIView in Post views. Users are able to edit their posts.

  3. As a **user** I can **delete my posts** so that **I can get rid of my posts that I no longer want to be shared.**

     - This user story is achieved by using generics. RetrieveUpdateDestroyAPIView in Post views. Users are able to delete their posts.

  4. As a **user** I can **view the details of a post** so that **I can read more information about the post such as when it was created, who created it, if it was edited, read the comments, etc.**

     - This user story is achieved by using generics. RetrieveUpdateDestroyAPIView in Post views. Users are able to see the detailed information about a post such as who created it, when it was created/edited, if there are comments, etc.

  5. As a **user** I can **like posts** so that **I can share my appreciation for the post and show the world and the author that their post is great.**

     - This user story is achieved using the Post likes model. Users are able to like to user posts.

  6. As a **user** I can **remove likes on a post** so that **I can change my mind about whether I like the post or not.**

     - This user story is achieved using generics. RetrieveDestroyAPIView in Post Like views. Users are able to remove their likes on a post.

- Comments

  1. As a **user** I can **post a comment on a post** so that **I can contribute discussion to a post or share my thoughts about a post.**

     - This user story is achieved using the Comment model. Users are able to add comments on posts.

  2. As a **user** I can **delete my comments on a post** so that **I can remove comments if I no longer want my comments to be public.**

     - This user story is achieved using generics. RetrieveUpdateDestroyAPIView in Comment views. Users are able to delete their comments.

  3. As a **user** I can **read comments on a post** so that **I can read what others think about the post and read the discussion happening.**

     - This user story is achieved using generics. ListCreateAPIView in Comment views. Users are able to read the list of comments on a post.

  4. As a **user** I can **edit my comments** so that **have the possibility to remove or add more details to my existing comments.**

     - This user story is achieved using generics.RetrieveUpdateDestroyAPIView in Comment views. Users are able to edit their comments.

  5. As a **user** I can **like comments** so that **I can share my appreciation for the comment.**

     - This user story is achieved by creating the Comment Likes model. Users are able to like to other users' comments.

  6. As a **user** I can **unlike comments** so that **I can change my mind about my positive feelings towards a comment.**

     - This user story is achieved using generics. RetrieveDestroyAPIView in Comment Likes views. Users are able to remove their likes on a post.

- Profile

  1. As a **user** I can **follow or unfollow other users** so that **I can see or choose to remove posts by specific users in my posts feed.**

     - This user story is achieved using the Follower model. Users are able

  2. As a **user** I can **view a detailed page of users** so that **I can see their posts and learn more about the user. I can also see their following count, followers count, etc.**

     - This user story is achieved using the Profile views. Users are able to see posts tied to a user, including their following count and followers count.

  1. As a **user** I can **view user avatars** so that **easily identify users of the website.**

     - This user story is achieved by the Profile model, allowing users to view profile images/avatars of other users.

- Searching

  1. As a **user** I can **search for posts or users by typing in text in the search bar** so that **I can easily find posts or users with a few keyboard taps.**

     - This user story is achieved in Post views where custom filterset fields, search fields, and ordering fields are implemented to allow users to search for posts based on content, title, and author.

- Filtering

  1. As a **user** I can **easily filter information based on different circumstances** so that **I can easily find information via a simple filtering method such as who is following who, what posts a user liked, etc.**

     - This user story is achieved by creating custom filterset fields in Post views, Comment views, Profile views, etc. However, users will not be able to see who is following who, they can see how many followers a user has or how many they are following.

### Database Model

- Database model has been created using Lucid Chart.

![Screenshot of database model](documentation/images/database-erd.png)

## User Experience React Frontend (UX)

### Site Goals

- **Indo German** is a social-media website designed to mimic the features of Twitter.
- User can create an account, log in, make posts about incomparable memories, information while staying in germany or India, and be able to engage with other users by commenting and liking on other posts/comments. Also user can change their profile photo and profile biography.
- The basic goal is to share information and provide a support/help to the users.
- Users can enable the network using this social media platform.

### Scope

- An attractive and intuitive UX experience:
	1. Website title that gives an idea what is it about
	2. Hero-image with information on the site's purpose
	3. Responsive design across all devices
	4. A clear and straightforward layout
	5. Footer with links to social media
	6. Implement alert messages to provide users with more feedback after they take certain actions
	7. Fast application that is easy to use
	8. Show user's profile image in the profile section

- An easy navigation for the user through all the pages and features
	1. Navigation Menu with easy access to all links.
	2. Easy Sign Up/ Sign In/ Sign Out functionality visible.
	3. Posts list with infinite scroll feature
	4. Landing page with guidance to sign up/sign in and how to start using the websites features
	6. Search field to enable user to search a keyword
	7. Left panel to see liked posts, edit profile
	8. User's Feed page with posts from their favourite users
	9. Liked page to enable users to save the posts they liked

- Posts and Comment Features
	1. Latest entries feature on top or first
	2. Click on post to view post details
	3. Ability to comment and like a posts
    4. Ability to like a comment
	5. Create, Edit and Delete own post and comment.

- Profiles Features
	1. Shows username and Avatar, enlists posts made by the user
	2. Shows information on Followers and other users following
	3. Password change option
	4. Profile edit option

[Back to top ⇧](#contents)

## Epics and User Stories

8 Epics were created which were further developed into 34 User Stories. Many of the user stories are worded similarly to the Moments walkthrough project because the functionality is quite similar - especially with navigation and authentication, posts, likes and comments.

### 1. Website UI

**Epic Goals for End User**

1. A landing page that describes about website
2. User guidance to get started
3. Easy register/sign up and sign in options

**Related User Stories**

- As a **site user** I can **capability** so that **I can easily understand the purpose and main features of the website**
- As a **site user** I can **see well written instructions on how to get started** so that **I can easily get information about how to start use the web application**
- As a **site user** I can **see sign up and sign in to the site** so that **I can easily register or sign in to access the functionality of website.**

### 2. Authentication

**Epic Goals for End User**

1. Access to Sign Up and Sign In Features
2. Access to Sign Out option
3. Refressing access tokens
4. Access to Changing Posts/Comments/Liking
5. Not Liking Own Posts/Comments
6. Not following self

**Related User Stories**

- As a **site user** I can **sign up and sign in to the site** so that **I can access the functionality of website.**
- As a **site user** I can **easily log out** so that **I can have more security on my account.**
- As a **site user** I can **maintain my logged-in status until I choose to log out** so that **my user experience is not compromised**
- As a **site user** I cannot **edit/delete any posts/comments/likes that are not mine** so that **I can be assured that my posts/comments/likes are protected and can only be changed by me.**
- As a **site user** I can **only like/unlike other user's posts and comments** so that **I can only show my appreciation for other posts/comments and not cheat the system by liking my own posts/comments**
- As a **user** I can **only follow other users** so that **I cannot cheat the system and follow myself and gain myself a new, false follower.**

### 3. Navigation

**Epic Goals for End User**

1. An easy to use navigation
2. Home page with posts list with infinite scroll visible to all
3. Navigation routing
4. Navigation conditional rendering
5. 404 page

**Related User Stories**

- As a **site user** I can **see a navigation bar on every page** so that **I can easily return to pages I wish to visit.**
- As a **site user** I can **infinitely scroll down to see more posts and also to see more comments** so that **I can consistently look at more posts/comments without having to click any extra links to view more.**
- As a **site user** I can **navigate through pages quickly** so that **I can view content smoothly without the pages being refreshed**
- As a **site user** I can **have the navigation bar customed to my logged-in or out status** so that **I can have the options to log in or sign up when logged out, or have the options to create a post, view my profile, sign out, etc when logged in.**
- As a **site user** I can **a nice 404 page consistent with the site layout** so that **I can be communicated with if I have reached an invalid web page.**

### 4. General

**Epic Goals for End User**

1. Search bar
2. Confirmation messages
3. About page
4. Left panel

**Related User Stories**

- As a **site user** I can **search for posts or users in a search box** so that **I can quickly find specific posts or users that I am wanting to look for.**
- As a **site user** I can **always be notified when my interactions on the website are successful (creating posts/comments, liking/unliking posts, unfollowing/following users, logging in/out, etc** so that **I will always be informed of my actions and whether they are successful or not.**
- As a **site user** I can **easily find the 'About' link** so that **I can learn about the purpose of this website which will be crucial as a new user coming to the website**
- As a **site user** I can **view Left Panel options** so that **I choose posts to display that I’m particularly interested in.**

### 5. Post Management

**Epic Goals for End User**

1. Post visibility
2. Post Details visibility
3. Post Creation Option
4. Post update Option
5. User's Feed page

**Related User Stories**

- As a **site user** I can **view all the posts on the Homepage** so that **I can view, like and comment those post**
- As a **site user** I can **view and read the detailed post page of all of the site users** so that **I can view the comments made by different users**
- As a **site user** I can **create posts** so that **I can share my memories with others**
- As a **site user** I can **edit/delete my posts** so that **I can make changes to existing post information or remove my content**
- As a **site user** I can **view all the posts on the User's Feed page** so that **I can see all the posts posted by the people whom I follow**

### 6. Comment Management

**Epic Goals for End User**

1. Comments visibility
2. Comments Creation Option
3. Comments update Option
4. Comments Delete Option

**Related User Stories**

- As a **site user** I can **read comments on a post** so that **I can read what others think about the post and read the discussion happening.**
- As a **site user** I can **post a comment on a post** so that **I can contribute discussion to a post or share my thoughts about a post**
- As a **site user** I can **edit/delete my comments** so that **I have the possibility to remove or add more details to my existing comments.**

### 7. Likes Management

**Epic Goals for End User**

1. Like visibility
2. Like/Unlike a post
3. Like/Unlike a comment

**Related User Stories**

- As a **site user** I can **see the post that have received most number of likes** so that **I can assess which are the best ones.**
- As a **site user** I can **like a post** so that **I can share my appreciation for the post and show the author that their post is great.**
- As a **site user** I can **remove likes on a post** so that **I can show that my opinion has changed**
- As a **site user** I can **like/unlike comments** so that **I can share my feelings towards a comment.**

### 8. Profile Management

**Epic Goals for End User**

1. Profile visibility
2. Profile following/ unfollowing user
3. Profile update option
4. Profile popularity assessment

**Related User Stories**

- As a **site user** I can **view a detailed page of users** so that **I can see their posts and learn more about the user. I can also see their following count, followers count, etc.**
- As a **site user** I can **follow or unfollow other users** so that **I can see or choose to remove posts by specific users in my posts feed**
- As a **site user** I can **see the most popular profiles** so that **I can see who has the most interesting posts**
- As a **site user** I can **update my own data** so that **I can make changes as needed**

[Back to top ⇧](#contents)

## Agile Development

An Agile approach was used to manage the completion of this project. Specifically, this meant breaking the project down into smaller tasks with a focus on minimum functionality first. Only when a minimally viable product is ready will extra features be added. In addition, GitHub projects and Issues were used a tool to keep track of the tasks.

What does minimally functioning mean in this context? As with any project, there are real constraints (time, energy, know-how) that force a developer to prioritize the work. Based on my abilities and constraints, I have prioritized the project requirements in the following way:

A functioning front-end with authentication, registration, CRUD operations for a Post and Comment. The focus is on working code.
Implementation of code for adding likes and comments to a Post.
Aesthetics/Design - This is of course important in an advanced front end project, but the goal here is to have just minimal styling at first and then as time permits improve the visual design.

### Kanban Board and MosCow Prioritization

I used a kanban board to help organize the user stories and tasks required for this project. When each task was in progress, they would be dragged to the 'in progress' column. When they were completed, they were dragged to the 'done' column. I also utilized MoSCoW prioritization by labelling each task as either Must Have or Should Have. I prioritized finishing the Must Have tasks first and then worked on the Should Have tasks. I managed to complete all of the tasks in the end and all user stories are successfully covered.

<details>
<summary>Screenshot of Kanban Board Part 1</summary>
<img src='frontend/docs/agile/userstory1.PNG' alt='kanban board part 1'>
<img src='frontend/docs/agile/userstory2.PNG' alt='kanban board part 2'>
<img src='frontend/docs/agile/userstory3.PNG' alt='kanban board part 3'>
<img src='frontend/docs/agile/userstory4.PNG' alt='kanban board part 4'>
</details>

### Outline of Sprints

The following is an outline of the sprints that were done during the completion of this project.

#### Sprint 1 - Project Setup

Goal: Project environment, authentication functionality.Minimum styling Time: Three Day

- Setup project
- Install additional libraries
- Write User Stories
- Setup minimal navbar with routing
- Design minimal sign in and sign up forms
- Connect sign in and sign up to backend
- Fix hamburger toggle
- Access and refresh tokens

#### Sprint 2 - Making a Post

Goal: Users can see posts on home page and add a post. Minimal styling Time: Three Days

- Design content page
- Connect to backed to display current posts
- Design Post form
- Create a Post
- Display a Post
- Like a Post
- Add links to navbar

#### Sprint 3 - Likes, Comments and Profile page

Goal: Users can add a comment and like a post and comment. Users can see the posts they've liked. Time: Seven Days

- Add feed and liked link to navbar for logged in user
- Add filter by like
- Add edit and delete function for Post.
- Design add comment form
- Add, delete, update, and display comments.
- Add like functionality on comment
- Create Profile page header which include profile Image, name, follow button
- Create basic popular profiles component
- Create follow, unfollow functionality for profiles
- Update profile page

#### Sprint 4 - General feature, styling and deployment

Goal: Adjust layout and basic styles for components

- Intuitive landing page
- About page
- Add left panel
- Add footer
- Configure layouts

[Back to top ⇧](#contents)

### Tasks

The tasks for the website development process was closely followed as mentioned in CI's Advanced Frontend React module "I Moments" walkthrough project. The task is generally the developers step towards preparing the app.
The tasks that I have followed during the development phase were carried out in this order.

**Before Project Inception**

- Design Entity Relationship Diagram
- Set up and create  Back End API. For this backend was built using the Django Rest API framework. All information can be found in [Indo German](https://github.com/AmarDange/Indo-German)
- Create Project, Epics, User Stories and prepare Kanban Board

**Creation of Project in Codeanywhere**

- Set up ReactJS project
- Install dependencies
- Coding
- Testing
- Create Frontend Repository in GitHub
- Combining existing DRF and React projects into the same workspace

**Future Tasks**
There are so many feaures I wish to build upon. But due to severe time constraints, the App is in it's basic form. Few features, I would've liked to have are:

- Want to add category (by India, Food, Germany, Culture) in left panel. So that user can identify soultion quickly.
- Want to add chat window, if someone wants to have personal chat of there topic then user can do it in chat window.
- Want to add emoji-picker in comment section.
- Wish to include a feature where users can add a media file instead of an image file if they wish to share a video.

[Back to top ⇧](#contents)

## Design

### Colours

The colour scheme has considered based on easy accessibility for all.
Complimentarity was key feature in color selection, to give it a pleasant feel for all age groups.
The palette was generated with inspiration from palettes provided by [Coolers](https://coolors.co/). The color palette used is as shown below.
![Color Palette](frontend/docs/colorpalette.JPG)

### Typography

The fonts are taken from [Google Fonts](https://fonts.google.com/).

### Imagery

The imagery on the website has been seleced according to the post requirement. Many images were taken from Google Images.

### Wireframes

The wireframes were generated using Balsamiq. The wireframes can be found in these links:<br>
[Wireframes for Desktop](frontend/docs/wireframe/Wireframe-Desktop.pdf)<br>
[Wireframes for Tablet](frontend/docs/wireframe/Wireframe-Tablet.pdf)<br>
[Wireframes for Mobile](frontend/docs/wireframe/Wireframe-Mobile.pdf)

[Back to top ⇧](#contents)

## Features

### Existing Features

**Landing Page**

- Includes navbar, hero-image, main body and a footer
- NavBar features logo, Sign Up and Sign in links
- A footer is displayed at the bottom of the landing page
  - Footer contains information about the creator
  - Contains copyrights info
  - Contains links to social media Linkedin and GitHub page (opening in a separate window)
- Landing page main body includes description about the app and User guidance
- Contains user guidance to Sign in Sign Up links

As shown here:
![Landing Page](frontend/docs/features/landinpage.PNG)

### NavBar

- Featured and consistent on the all pages
- Two variants of the navbar:
  - New or not logged-in users will see the Sign up and Sign in icons, as shown in ![NavBar Logged out](frontend/docs/features/Navbar-at-start.PNG)

    - NavLink that links to the Sign in page, allowing users to Sign in
    - NavLink that links to the sign up page, allowing users to create an account
  - For logged in user it shows Home, About, Feed and Liked, Sign Out and Profile Nav items. As shown in ![NavBar logged in](frontend/docs/features/Navbar-after-signin.PNG)
    - NavLink that links to the home page, displaying all posts of the users the logged in user follows
    - NavLink that links to the about page, displaying more information about website
    - NavLink that signs the user out
    - NavLink that links to the profile page, display information about logged in user
- The NavBar is fully responsive and changes to a toggler (hamburger menu) on smaller size screens.

**About Page**

- The 'About' page is created so new users will immediately be able to learn the purpose of Indo German and what Indo German is used for.
- The 'About' page also explains the use of App. For logged-in users, the 'About' page serves a useful purpose as it explains what the 'Feed' page is for, and what the 'Profile' page is for.
- Users will be reminded of the functionality of the website such as the capability of being able to edit/delete posts and comments, not being able to like to their own posts/comments, the character limit of titles and content, etc.
- All of the information a new user or returning user would possibly need will be found on this page.

As shown here:
![About Page](frontend/docs/features/aboutpage.PNG)

### Sign Up Link and Form

- Allows users to create an account
- Users must provide a valid username and enter their preferred password twice for confirmation
As shown on link provided: ![Sign Up](frontend/docs/features/signup.PNG)

### Sign In Link and Form

- Allows registered users to login to their account
- Both the username and password have to be correct to be signed in
- Displays errors if the username or password is wrong or the input is invalid
As shown on link provided: ![Sign In](frontend/docs/features/signin.PNG)

### Post Section (Home)

- The posts are displayed in a single list, styled as cards for clean separation between posts.
- Enabled with infinite scroll feature.
- Each post includes a title, description and image, along with Like and Comments icons showing number they received.
- Clicking on heart icon adds a like to the post.
- Clicking on comments icon takes user to the post detail page which displays all the comments the post recieved.
![Post Section](frontend/docs/features/postsection-home.PNG)

### Left panel

- User can see liked posts by selecting a badge
- user can create new post.
- User can open own profile to edit in new window
  
    ![Left Panel](frontend/docs/features/leftpanel.PNG)

### Search Feature

- By typing a query in the search bar users can find a specific post they are looking for
- Allows to search through all post title, word or author name

    ![Search Bar](frontend/docs/features/searchbar.PNG)

### Popular Profiles

- Reusable component shows 10 most followed profiles in large devices in right column.
- It shows first four most followed profiles in the app in medium to small devices.
- The component displays user avatar, name and follow/unfollow button.
- Users are able to follow a specific profile they like and then be able to easily view their posts in the Feed.

    ![Popular Profiles](frontend/docs/features/popularprofile.PNG)

### Feed page

- Contains all posts of users that the logged in user follows
- The posts are displayed in a single list, styled as cards for clean separation between posts.
- Each post includes a title, description and image, along with Like and Comments icons showing number they received.
- Clicking on heart icon adds a like to the post.
- Clicking on comments icon takes user to the slected post's detail page which displays all the comments the post recieved.
- Enabled with infinite scroll feature.

### Liked page

- Contains all posts of users that the logged in user likes
- The posts are displayed in a single list, styled as cards for clean separation between posts.
- Each post includes a title, description and image, along with Like and Comments icons showing number they received.
- Clicking on heart icon adds a like to the post.
- Clicking on comments icon takes user to the slected post's detail page which displays all the comments the post recieved.
- Enabled with infinite scroll feature.

### Comments Section

- The section can be found under a post in post detail pages.
- Can be accessed by clicking the comments icon and post.
- Allows users to add a comment on a post.
- Comments can be edited or deleted.
- Displays the date the comment was posted or edited.
- All comments can be read by all other users.
- Editing of other users' comments is not allowed as dropdown menu will not be visible.
  
    ![Comments Section](frontend/docs/features/commentsection.PNG)

### Post Create Form

- Logged in user can access the CURD functionality for post.
- Post create form contains title, content and image fields that they can fill and update.
  
    ![Post Create Form](frontend/docs/features/addpost.PNG)

### Post Edit Form

- Can only be accessed from the post details page by clicking the dropdown menu that can be seen only if the logged in user is the owner of the post as shown
- Contains title, content and image fields that they can fill and update.
- They will be redirected to Post Details page.
  
    ![Post Edit Form](frontend/docs/features/postedit-form.PNG)

### Like

- A logged in user can like  post that interests them
- A logged in user can unlike post if they are not interested in it
- The liked post will appear in "Liked" page
- The number the likes recieved by the post can be seen on each page.
  
    ![Like](frontend/docs/features/like.PNG)

### Post Detail Page

- Contains details of a single post - image, title, content (if provided by the user)
- Contains number of likes and comments the post has
- Contains like icon to allow user to like the post
- Features comments section below the post.
- Comments add field will be visible to the users.
- Contains a dropdown menu on the post to allow the owner to edit or delete the post
The Post Detail page looks like as shown below:
![Post Detail Page](frontend/docs/features/postdetailpage.PNG)

### Profile Page

- Logged in user can click either avatar from NavBar or from popular profiles panel to navigate to pofile page, where he can update his/her profile info. Also they can see number of post, number of followers, number of following and list of post posted by user so far.
The Post Detail page looks like as shown below:
![Profile Page](frontend/docs/features/profilepage.PNG)

### Delete modal and Alert message

- A delete modal is displayed asking the user for confirmation to delete a post or comment.
  
  ![Delete Modal](frontend/docs/features/delet-alert-message.PNG)

## Components

A number of the components created are reusable and were used across the website in multiple pages and sections.

- `<Asset />` - Asset.js - renders a loading spinner. It is utilized in several places across the site, including showing a loading spinner where API calls are made.
- `<Avatar />` - Avatar.js - displays a user's profile image. It is used in the Create Panel along with the Username. Passed props allow for setting image source and size and adjust image dimensions depending on where the component is rendered.
- `<MoreDropdown />` - MoreDropdown.js - reusable component, used to render the dropdown menu which allows user to edit or delete their own posts or comments, and also edit their profile or change profile password. provides a dropdown menu with some additional actions a user can take, such as editing and deleting.
- `<NavBar />` - NavBar.js-  reusable component with the content depending on the login status of the user. For logged in user it shows Home, About, Feed and Liked and Sign Out Nav items. For those who are not logged in, it displays icon links to about, sign up or sign in. The component is used on each page of the app.
- `<PageNotFound />` - PageNotFound.js - specific component to display 404 error message for the url which does not exist.
- `<PopularProfiles />` - PopularProfiles.js - reusable component showing most followed profiles in the app named as "Active Inspirers". The component displays user avatar, name and follow/unfollow button.
- `<DeleteModal />` - DeleteModal.js - reusable component, used to render the modal when user want to delete their own post and comment.

## Technologies

1. [Django REST Framework](https://pypi.org/project/djangorestframework/3.14.0/)

2. [Django](https://www.djangoproject.com/)

3. [Python](https://www.python.org/)

4. [psycopg2](https://pypi.org/project/psycopg2/)

5. [Django all-auth](https://django-allauth.readthedocs.io/en/latest/installation.html)

6. [gunicorn](https://gunicorn.org/)

7. [PostgreSQL](https://www.postgresql.org/)

8. [dj-rest-auth](https://pypi.org/project/dj-rest-auth/2.2.5/)

9. [Django-filter](https://pypi.org/project/django-filter/22.1/)

10. [Djangorestframework-simplejwt](https://pypi.org/project/djangorestframework-simplejwt/5.2.1/)

11. [Django-cors-headers](https://pypi.org/project/django-cors-headers/3.13.0/)

### Languages Used

- [CSS](https://en.wikipedia.org/wiki/CSS)
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [React JSX](https://reactjs.org/docs/introducing-jsx.html)

### Tools

- [Balsamiq](https://balsamiq.com/)- to create the wireframes for the project
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/) - for debugging of the code and checking site responsiveness
- [LICEcap](https://www.cockos.com/licecap/) - to generate gif files for testing all the features of the app
- [Cloudinary](https://cloudinary.com/) - to store static files
- [Coolors](https://coolors.co/?home) - for color palette
- [Favicon.io](https://favicon.io) - to generate the site favicon
- [Font Awesome](https://fontawesome.com/) - Icons from Font Awesome, used in NavBar and create buttons, like and comment icons
- [Google Fonts](https://fonts.google.com/) - import font
- [Lucid Chart](https://www.lucidchart.com/) - Lucid Chart was used to create the data model for the back end.
- [Cloudinary](https://cloudinary.com/) - Cloudinary is used to host the uploaded images.
- [Git](https://git-scm.com/) - for version control within VSCode to push the code to GitHub
- [GitHub](https://github.com/) - for remote repository to store project code
- [Gitpod](https://gitpod.io) - to host a virtual workspace
- [Heroku](https://dashboard.heroku.com/login)
- [ElephantSQL](https://www.elephantsql.com/)
- [Pillow](https://pypi.org/project/Pillow/9.2.0/) - Python Imaging Library which provides image processing capabilities.
- Validation:
  - [W3C Validator](https://validator.w3.org/) was used to validate the html
  - [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) was used to validate the css
  - [ESLint](https://eslint.org/) used to validate JSX code
  - [CI Python Linter](https://pep8ci.herokuapp.com/) - CI Python Linter was used to validate the Python code used and check for warnings/errors.

### Frameworks, Libraries and Programs

- [React Bootstrap4](https://react-bootstrap-v4.netlify.app/) - For styling the site and site responsiveness across various devices
- [ReactJS](https://reactjs.org/) - To build the functionality of the site
- [Axios](https://axios-http.com/docs/intro) - Used for promise-based HTTP. axios was used to send API requests from the React project to the be_inspired_drf_api and avoid any CORS errors when sending cookies.
- [JWT](https://jwt.io/) - A library to decode out JSON Web token. JWT prevents unauthenticated user from making extra network requests to refresh their access token. It is also used to remove the timestamp from the browser when the user refreshes token expires or the user logs out.
- [Popper](https://popper.js.org/) - A 3rd party library used by React-Bootstrap to make sure the dropdown menus position is fixed on all browsers.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - To enable component to load content (posts, recommendations and comments) automatically as the user scrolls towards the bottom of the page without having to jump to next/previous page.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - Used for dynamic routing. This library enables the navigation among views of various components and control what the user can see depending on the URL they have accessed in the browser.

[Back to top ⇧](#contents)

## Production

Installations:

- React library - using the command `npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm`
For the React project set up
- react-bootstrap - using the command `npm install react-bootstrap@1.6.3 bootstrap@4.6.0`
This is used to render the layout and styling of the website. The library makes it easy to create and use standard interface elements that are responsive.
- react-router-dom - using the command `npm install react-router-dom@5.3.0`
 This library makes the site navigation easier without the need to refresh the page. In social media sites ith mutiple components, it provides a quick and responsive user experience.
- axios - installed using command `npm install axios`.It manages the calls to the backend database. Simplifies the API requestsand the included interceptors refresh JSON Web Tokens which the site uses.
- infinite-scroll-component - installed using command `npm install react-infinite-scroll-component`.
It is used to enable infinite scrolling on the Posts and Recommendations components and on comments. Infinite scrolling is a standard feature in all social media sites.
- jwt decode - Using command `npm install jwt-decode`. Used to remove requests to refresh an access token for signed out users. It enables the refresh token to be decoded so that a timestamp can be put in local storage, if a timestamp does not exist in the user's local storage then access refresh requests will not be made.

## Issues and Fixes

Many bugs have occurred during the development of the front end project. Most notable bugs are listed below:

(1) Issue: When user was creating profile at that default image was not taking from Backend project, it showed without Image.<br>

- Fix: Add image in cloudinary once again and provided path in Profile model.py. Again deployed project. But previously created profiles was not corrected.

(2) Issue: When user sign in the app. It was not showing Home page after sign in. It was showing blank page and after refresh URL Home Page was coming automatiocally<br>

- Fix: Added CSRF_TRUSTED_ORIGINS to your settings.py file and updated CLIENT_ORIGIN and CLIENT_ORIGIN_DEV in Heroku.

## Testing

Testing has taken place continuously throughout the development of the project. Each view was tested regularly. When the outcome was not as expected, debugging took place at that point. An exhaustive list of features were checked on different devices and browsers. They were performed and their scrrenshots can be found in the features section on how the distinct features render.

- Link for TESTING.md file:- [Testing Results Here](TESTING.md)

## Deployment

### Heroku

This application has been deployed from GitHub to Heroku by following the steps (these are steps after you have set up the front end project in the Config Vars of the back end project):

1. Create or log in to your account on [Heroku.com](https://www.heroku.com/).
2. Create a new app, add app name and choose your region.
3. Click on create app.
4. In Terminal of your project, push your changes to GitHub.
5. Log in to Heroku.com and open the dashboard for your react application (for the front end).
6. Click on the 'Deploy' tab and go to 'Deployment Method' and choose GitHub
7. Navigate to 'App connected to GitHub' and search for the relevant repository
8. Select the repository you wish to deploy and click 'Connect'
9. Scroll down to the bottom and then select “Manual deploy”, and choose your repository.
10. Wait for your build to complete.
11. When you see the message “deployed to Heroku” in the build log, click the “open app” button at the top of the page.

### Connecting to API

- Navigate to the Heroku app for Indo-German project and under the 'Settings' tab add the following config vars: Key: Client_Origin and Key: Client_Origin_Dev
- Ensure that the trailing '/' of the value of these key is removed from the end of both links and save the config vars.
- Install the Axios package, and create the supporting axiosDefaults.js file

### Final Deployment

1. Comment out all the console.log within the codes.
2. Navigate to package.json and in the scripts section add the following command:

```
"heroku-prebuild": "npm install -g serve,"
```

3. Add a Procfile to the root of the project with the following:

```
web: serve -s build
```

4. Git add, commit and push your code
5. Navigate to Heroku and deploy the project via the deploy button under the 'Deploy' tab

[Back to top ⇧](#contents)

## Credits and Resources

- [Code Institute DRF API Example Project](https://github.com/Code-Institute-Solutions/drf-api)
  This API was built using Django REST Framework. Most of code is inspired by Code Institute's DRF API example project, including the database model, the different features and functionality of the API, creating serializers, setting up the project, setting up filters and search fields, etc. I decided to use the base of whole project on this API since it was a great fit for the application I had planned and it provides a great foundation to expand upon.

- [Django REST Framework Documentation](https://www.django-rest-framework.org/)
  The official Django REST Framework documentation was referred to many times while creating this project.

- [Code Institute Moments Project](Solutions)
  - Functionality of the project credit goes to Code Institute. Comments are made along the project of where code is used from Code Institute's Moments project.

- [Stack Overflow](https://stackoverflow.com/)
  - Stack Overflow was referred to many times while trying to debug code.

- [JSX Validation](https://gist.github.com/ianmeigh/8e603b91a38d7829d959402bfcf29d3d)
  - Ian Meigh's tutorial on ESlint was used for ESlint testing.

- [React Bootstrap](https://react-bootstrap.github.io/)
  - Components from React Bootstrap were used in the project (Navigation bar, forms, cards, etc).

## Acknowledgements

- My Mentor Mr. Akshat Garg for his guidance and advice during the project.

- Thank you to Tutor Support for always being there for me, and always being patient with my questions.

- Thank you to CI Slack Channel for taking time out of their day to answer my questions.

- Stack Overflow for tips, tricks and solutions to fix errors.

[Back to top ⇧](#contents)
