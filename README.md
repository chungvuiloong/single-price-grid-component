# Frontend Mentor - Single price grid component solution

This is my solution (MrJay's solutions) to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help me to improve my front-end coding skills (and of course yours too!) by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

### Screenshot

### Links

- Solution URL: [Github](https://github.com/chungvuiloong/single-price-grid-component)
- Live Site URL: [Vercel](https://mrjays-single-price-grid-component.vercel.app/)

## My process
Starting with mobile first approach, I analyse both the designs in mobile and desktop view. By doing, I can understand the structure better and design a layout that suits adjusts according in both mobile and desktop.

- There are three components (plus an additional footer component).
    - JoinCommunity
    - MonthlySubscription
    - WhyUs
    - Footer (this is an additional)
- A container to hold the three components.
- A container to hold MonthlySubscription & WhyUs components.
    - In desktop view, this container is flex-row while giving 50% of width to both components.
    - In mobile view, this container is flex-col. MonthlySubscription is on top of WhyUs component.
- In MonthlySubscription component, a container should be used to hold both text $29 and per month via flex
    - per month text is centered via self-center

### Built with

- Semantic HTML5 markup
- [TailwindCSS](https://tailwindcss.com/)
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### What I learned

This project was used so I can better learn to add custom css variables to tailwind. I learned how to better code custom variables via tailwind.config.js such as:

```tailwind.config.js
      screens: {
        'sm': '375px',
        'lg': '1440px'
      },
      colors: {
        'Cyan': 'hsl(179, 62%, 43%)',
        'Bright-Yellow': 'hsl(71, 73%, 54%)',
        'Light-Gray': 'hsl(204, 43%, 93%)',
        'Grayish-Blue': 'hsl(218, 22%, 67%)',
      },
```

### Continued development

In this challenge, mobile and desktop views are the only given views. I am hoping to develop this further with tablet view as well. 

A modal component can be built so that it will be activated via the onClick function of the signup button.

## Author

- Website - [MrJay's Simple Portfolio](https://mrjays-simple-portfolio.vercel.app/)
- Github - [Jere / Chung Vui Loong](https://github.com/chungvuiloong)
