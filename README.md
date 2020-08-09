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

![Desktop View](https://cloudinary.com/console/c-6d104373777f1bf143f4f40386ed59/media_library/folders/f270114cf0e1e692a2272ef5e2fb6a16?sortField=uploadedAt)

- Screens for the desktop view

![Tablet View](https://cloudinary.com/console/c-6d104373777f1bf143f4f40386ed59/media_library/folders/8b499cb2d70a3099e379f0fd7eebc349)

- Screens for the tablet view

![Mobile View](https://cloudinary.com/console/c-6d104373777f1bf143f4f40386ed59/media_library/folders/6286b28e337bea97ddc2b2a25cb37795)

- Screens for the mobile view ( currently missing menu screen )

![FontAwesome](https://fontawesome.com/)

- All icon and pet images will be sourced from Font Awesome.

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   y   | _The header will contain the navigation and login fields._               |
|  Footer  | functional |   n   |   n   | _The footer includes website credits and contact information._       |
|   Sign Up    |   functional    |   y   |   n   | _The sign-up field will allow users to create an account._      |
| Pet Array | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Pet List    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |
| Pet Image | functional | n | y | _The image will be an enlarged version of the selected pet icon._ |
| Pet About | functional | y | n | _The about component will consist of input fields for the user to edit and save._ |
| Button | functional | n | y | _The button will be used for the login, sign up, edit and release buttons._ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

***

## Post-MVP

> Add a pop-up on the 'release' button explaining you're about to return your pet to the wild and asking for confirmation.
> Add one to two line 'descriptions' for the pets. Example; _"You're pretty sure it's a normal cat, but it's hard to tell. Oh well, it probably likes fish anyway."_
> Upon selecting a pet on the adoption page, a card appears with the description and a "take home?" button.
> A starter pet screen appears after you sign up, with three randomly generated pets from the pet-list. 
> A feeding system, with a hunger bar and shop through which to obtain food.
> Add games an a currency system. ( Off-brand duck hunt, maybe? )

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
