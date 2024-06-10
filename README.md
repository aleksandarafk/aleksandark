# Portfolio - Semester 6
This repository is to show the creation process of my website portfolio project for semester 6 ICT & Media Design.

## Hosted Website

[Portfolio Link](https://aleksandark.vercel.app/)

## Project Idea

For this portfolio I wanted to create something that represents is a mix of retro and modern day design, at the moment I am obsessed with arcade games, therefore that is my main inspiration. <br> <br> The idea was to make something that is personal but at the same time showcases my professional skills in a fun way.

## How to set up and run the project ?

Simply use the npm command to install all necessary dependencies.

```bash
npm install 
```

After you install the packages you have to run the project using the terminal with the command: `npm run dev`

- If you have successfully installed the necessary packages the command will take you to ***http://localhost:5173/***

To check the eslint of the project and if it has any errors you can run the command: `npm run lint`
- If there are any errors they will be displayed in the terminal

To create a build of the project run `npm run build`
- If there are eslint errors the build will fail

***The project has no eslit erros.*** <br><br>
***The project`s code is commented.***

## Website contents

The website consists of (pages):
- A homepage
- An unique page for each project
- Custom 404 page

The website consists of (functions):
- Dynamic canvas
- Interactive 3D model
- Marquee text scroll and animation
- Transition animation between pages
- Translation (Bulgarian and English)
- Easter Egg - Audio(s) 
- Animated project gallery
- Responsive Design


## Website structure

The website structure: 
```
┌       #Navigation menu (Projects, About, Contact, Translation)
├── Homepage
│       # Projects, About me, Contact options 
├── Projects
│       # Decending by year
├── About Me
│       # Description and an interactive 3D model
├── Contact Me
│       # Description and social media links
└

```

## Commits

Everything has been commited as of now.

## TODO
- [X] Create the project structure
- [X] Implement the installed packages
- [X] Create a dynamic canvas that responds when interacted with
- [X] Create the necessary components for the website
- [X] Add an interactive 3D model to the 'ABOUT' section of the website
- [X] Responsive design
- [X] Homepage
- [X] Animated Homepage
- [X] Animated Projects Page
- [X] Implement a custom 404 error page
- [X] Properly link the website content
- [X] Add contact page with social medias
- [X] Add about page with an interactive 3D model
- [X] Load the text information about each section from a .JSON file
- [X] Add language support (Bulgarian and English)
- [X] Create unique thumbnails for each project displayed on the website
- [X] Add a favicon
- [X] Create the projects page
- [X] Create the design for each project page
- [X] Comment code and structure the contents of the project folder properly
- [X] Fix bugs and issues that may pop during production
- [X] Adding a CHANGELOG.md
- [X] Host


## Project structure

The project structure: 
```
$PROJECT_ROOT
│   # public
├── images, favicon, assets
│   # src
├── React component files, assets folder, root of project
│
└── index.html
```

