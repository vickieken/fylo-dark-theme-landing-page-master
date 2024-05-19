# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./Screenshot%202024-05-19%20at%206.45.23%20PM.png)
![](./Screenshot%202024-05-19%20at%206.46.02%20PM.png)
![](./Screenshot%202024-05-19%20at%206.45.40%20PM.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/vickieken/fylo-dark-theme-landing-page-master.git)
- Live Site URL: [Add live site URL here](https://vickieken.github.io/fylo-dark-theme-landing-page-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- added some functionalities like the switch mode with JS

### What I learned

While working on this landing page I got to understand that I could do quite alot with CSS media query and some other psuedo classes and also variables in css and a little of javascript, I just need to think outside the box

To see how you can add code snippets, see below:

```html
<span>Some HTML code I'm proud of</span>
```
```css
.navbar .modeSwitch .dark {
    font-size: var(--PARAGRAPH-SIZE);
    color: var(--White);
    transition: all 1s ease-in-out;
}
```
```js
modeSwitch.addEventListener("click", ()=> {
    
    switchBtn.classList.toggle("move");

    body.classList.toggle("light");

    span.forEach(span => {
        span.classList.toggle("noChange");
    });
});

```

### Continued development

In my future projects I'd like to do more justice to my codes with JavaScript code, thereby perfecting it.

## Author
- Frontend Mentor - [@vickieken](https://www.frontendmentor.io/profile/vickieken)
- Twitter - [@vickieken8](https://www.twitter.com/vickieken8)
