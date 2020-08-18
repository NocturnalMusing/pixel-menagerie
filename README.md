# PIXEL MENAGERIE 

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_Welcome to the **Pixel Menagerie**, a friendly little site where you can adopt some strange creatures to call your own. Sign up and choose the pets you want, name them, and tell us about their personality! Maybe they've got a weird backstory? It's up to you!_


<br>

## MVP

_The **Pixel Menagerie** MVP consists of functioning authentication for users, allowing a personalized experience through the selection of images ( 'pets' ) with unique input fields for personal use._

<br>

### Goals

- _Use authentication to implement users._
- _Create three tables and join them with associations. ( Users to Pets; one to many - Species to Pets; one to many )_
- _Use CRUD to allow pet personalization, attached to a user profile._

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
|     Ruby      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Ruby on Rails  | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes

![All Wireframes](https://res.cloudinary.com/nocturnalmusing/image/upload/v1596998147/Pixel%20Menagerie/Wireframes_go5fbg.png)

- All available views with indicated site flow.

[Desktop View](https://cloudinary.com/console/c-6d104373777f1bf143f4f40386ed59/media_library/folders/f270114cf0e1e692a2272ef5e2fb6a16?sortField=uploadedAt)

- Screens for the desktop view

[Tablet View](https://cloudinary.com/console/c-6d104373777f1bf143f4f40386ed59/media_library/folders/8b499cb2d70a3099e379f0fd7eebc349)

- Screens for the tablet view

[Mobile View](https://cloudinary.com/console/c-6d104373777f1bf143f4f40386ed59/media_library/folders/6286b28e337bea97ddc2b2a25cb37795)

- Screens for the mobile view ( currently missing menu screen )

[FontAwesome](https://fontawesome.com/)

- All icon and pet images will be sourced from Font Awesome.

#### Component Tree

![Component Tree](https://res.cloudinary.com/nocturnalmusing/image/upload/v1597000381/Pixel%20Menagerie/pixel-menagerie_component_map_lvdilq.png)

- Preliminary structure of components

#### Component Hierarchy

``` structure

src
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Button.jsx
      |__ PetsArray.jsx
      |__ PetsList.jsx
      |__ SignUp.jsx
      |__ PetImage.jsx
      |__ PetAbout.jsx
|__ services/
      |__ api-helper.js
      |__ auth.js
      |__ species.js
      |__ pets.js

```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   y   | _The header will contain the navigation and login fields._               |
|  Footer  | functional |   n   |   n   | _The footer includes website credits and contact information._       |
|   Sign Up    |   functional    |   y   |   n   | _The sign-up field will allow users to create an account._      |
| Menagerie | functional |   n   |   y   | _The menagerie is shown on the adoption zone page._                 |
|    Pet List    | functional |   n   |   n   | _The pet list will display on a user's page._ |
| Pet Image | functional | n | y | _The image will be an enlarged version of the selected pet icon._ |
| Pet About | functional | y | n | _The about component will consist of input fields for the user to edit and save._ |
| Button | functional | n | y | _The button will be used for the login, sign up, edit and release buttons._ |


#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create BE Tables |    H     |     3 hrs      |     3 hrs     |     3hrs     |
| Create Authentication Actions |    H     |     1 hrs      |     1hrs     |     1hrs     |
| Create CRUD Actions |    H     |     3 hrs      |     2 hrs     |     2hrs     |
| Create Needed Screens |    H     |     1 hrs      |     30 mins     |     30mins     |
| Create Header, Footer, & Button Components |    H     |     1 hrs      |     45mins     |     45mins     |
| Create SignUp Component |    H     |     1 hrs      |     1 hrs     |     1hrs     |
| Create PetSpecies file |    H     |     1 hrs      |     20 mins     |     20mins     |
| Populate Landing Screen |    H     |     1 hrs      |     20 mins     |     20mins     |
| Populate Sign Up Screen |    H     |     1hrs      |     1 hrs     |     1hrs     |
| Populate Adopt Screen |    H     |     3 hrs      |     1.5 hrs     |     1.5hrs     |
| Populate User Screen |    H     |     1 hrs      |     1 hrs     |     1hrs     |
| Create PetDetail and PetEdit Screens |    H     |     3 hrs      |     2.5hrs     |     2.5hrs     |
| Desktop Styling |    H     |     3 hrs      |     3hrs     |     3hrs     |
| Tablet Styling |    H     |     3 hrs      |     1hrs     |     1hrs     |
| Mobile Styling |    H     |     3 hrs      |     2hrs     |     2hrs     |
| Debugging |     H     |     3 hrs      |     3hrs     |     3hrs     |
| TOTAL               |          |     32 hrs      |     ~ 24 hrs     |     24 - 25hrs     |

<br>

### Server (Back End)

#### ERD Model

![ERD](https://res.cloudinary.com/nocturnalmusing/image/upload/v1597003468/Pixel%20Menagerie/pixel_menagerie_ERD_iawevq.png)

- There is a join table here that I forgot to implement on this ERD.

<br>

***

## Post-MVP

- ~~Add one to two line 'descriptions' for the pets in the Pets Table. Example; _"You're pretty sure it's a normal cat, but it's hard to tell. Oh well, it probably likes fish anyway."_~~
- Adjust Landing Page header for when someone is logged in.
- Add a pop-up on the 'release' button explaining you're about to return your pet to the wild and asking for confirmation.
- Add a delete user button
- Upon selecting a pet on the adoption page, a card appears with the description and a "take home?" button.
- A starter pet screen appears after you sign up, with three randomly generated pets from the pet-list. 
- A feeding system, with a hunger bar and shop through which to obtain food.
- Add games an a currency system. ( Off-brand duck hunt, maybe? )

***

## Code Showcase

- TBA

## Code Issues & Resolutions

- TBA
