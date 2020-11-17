# The Odin Project - Dynamic User Interface Interactions

## Dropdown

1. You can allow the menu to show up either on click or on hover.
2. You should hard-code the menu items into your HTML but hide/reveal them using JavaScript. You can do this either by adding a class (visible or something) or by manually setting the style in JS.
3. Make sure the code is reusable! You should be able to create multiple drop-downs on a page without repeating the JavaScript code.
4. If you bundle your code into a module you can publish it to npm and then install and use it anytime you like! Nothing like publishing your own modules to make you feel like a pro 😎.

## Mobile Menus

1. Browse the web for some inspiration, pick something and try to implement it!

## Image Slider

1. This one is a little more involved than the last two, so think about how you would set up the different elements within the site.  
2. Set up a very wide div which will contain the individual “slides” of each image. By appropriately positioning that div inside a container div (which acts like a picture frame), you can choose which slide is visible at any given time.
3. Once you have the slider positioned properly, build functions for “next” and “previous” which will advance to the next or previous slide accordingly. Make the transitions smooth using simple effects.
4. Set up arrow buttons which activate those functions and play with cycling through the images.
5. Add in some navigation dots at the bottom of the slides. Make a horizontal series of empty circles with CSS immediately below the slideshow. Each circle represents a slide, so whenever a new slide is activated, its corresponding circle gets filled in so you can tell where in the show you are. Make each circle link to that particular slide, so you can click on the circle and it will jump to that slide.
6. Add a timeout which advances the slides every 5 seconds.
7. Play around with your slideshow!
