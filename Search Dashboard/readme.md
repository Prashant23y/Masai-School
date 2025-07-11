# Search Dashboard

It's a simple search dashboard I built using HTML, CSS, and JavaScript.  
It allows you to search through a large list of names in real-time. I also added features like debounce, throttle, scroll-based button, and some stats.

## Features

1. Search from Large List
   - I created 200+ names using a loop.
   - You can type in the input box and it will search matching names.
   - It uses debounce to avoid calling the search too many times with delay of 1 second.

2. Scroll Listener with Throttle
   - When you scroll down more than 200px, a Top button appears.
   - I used throttle (500ms) to optimize the scroll event.

3. Some extra features 
   - It shows total keystrokes also displays the debounced search function triggered count
   - It highlights the matched part of the name


## What I Learned

- How to use debounce for inputs.
- How to use throttle for scroll events.

## Tech Used
   HTML, CSS, JavaScript

## Deplyed link

    link > https://searchdashboardusingdebouncing.netlify.app/