# The Kingdom of Stobby Project

### Why I created this page
The reason why I created this page has a super long backstory, so in a nutshell, my friend and I somehow created a fantasy kingdom and now she wants to write a book with me about it. The book includes all the characters and everything you need to know to survive in our kingdom. Since I was learning coding and all, I decided why not turn the book into a website? So there you are, a nice website I designed all by myself without the help from anyone else (I wish).


## Landing page

Anyway, before I start talking about all the boring stuff that I was forced to write, go visit [the live weblink](https://medothings.github.io/Kingdom-of-Stobby).    
Also you should probbaly know that this page is based on [Project: Landing Page](https://www.theodinproject.com/lessons/foundations-landing-page) of the [Foundatins Course](https://www.theodinproject.com/paths/foundations/courses/foundations) from [the Odin Project](https://www.theodinproject.com)

### What I learnt from creating this page
While making this page, I learnt many many things. So be prepared to look at the long list of things I learnt even though you would have probably quit before finishing reading the whole thing.
- Always put every single thing in a class
  - To ensure that all the flexbox stuff works the way you want it to
- How to make the webpage responsive 
  - Basically, just say:
  ``` css
  font-size: clamp(1.5rem, 2.75vw, 2.5rem);
  ```
  and change accordingly
  - Including
    - Text size
    - Size of pictures
    - Size of margin
    - Wrapping
      - Ok so for wrapping, that's different
      - Just assume that there are 5 things called box, there is a margin of 50px between each box and that the width of the screen you are looking at is 400px
``` css
.box-container {
  flex-wrap: wrap;
}

.box {
  min-width: 100px;
}
```
    - People use a bigger screen to see more content. Instead of making everything grow bigger as the screen grows, it is probably a good idea to give everything a `max-width` so that they do eventually get smaller
- How to ensure that the webpage takes up at least the whole view height
  - Either say 
```css
  body {
    height: 100vh;
  }
```
  - Or if you want one section or your code to take up the remaining space for the whole view height you can say
``` css
.box-container {
  flex: 1;
}
```

- Don't rely on px, there are good choices that will help make a better webpage such as
  - rem (usually 16px)
  - % 
    - The percentage sign will definitely come in handy if you want to make a responsive webpage (which of course you do so for me, I highly suggest % when it comes to margin, padding etc.)
- Always use keyboard shortcuts (or else your dad would get angry for wasting time)
  - `Shift + Command + K` to delete a line
  - `Command + X` to cut
  - `Option + Up arrow / Down arrow` to move a line
  - I only listed the ones that I know but do not use and of course there are way more. If you want to know more keyboard shortcuts to use in VS code, you can always ask your good friend Google
- How to make the cursor turn to a pointer when I hover over something
``` css
.button2:hover {
    cursor: pointer;
}
```
- How to make something bigger when I hover over it
``` css
.button2:hover {
    scale: 1.1;
}
```
- How to give a shadow to something
``` css
    box-shadow: 1px 2px 3px rgba(0,0,0, 0.3);
```
1px for shadow on the `left`, 2px for shadow `below`, 3px for the size of the `glow`, and `rgba` stands for `red green blue alpha channel`(so basically the color and transparency) 
- If you ever need help, before you start using Google (even though Google is a good friend of yours), call your dad.
  
### Ideas for future developement

Just saying, my future developement section isn't for the landing page, it is ideas for what I plan on adding to other things in my project. 
 
Since so far I literally finished only the landing page, there are tons are things to work on. Each button has to lead to a website. Each website has to look nice. The text has to be readable but take up a reasonable amount of space. The pictures have to look nice but also take up a reasonble amount of space. The pictures have to be free. The webpage has to look fun. Everythings has to work in different sizes of screen (if this sentence even makes sense to you). So many things to work on, and I have to list them all here?   
So I decided to cut myself some slack and make future developements to be more specific, like future developments for the next few days. Like that, I will spend less time writing this, and your eyes will also hurt less (also so that in future I will still have things to write for the coming sections so that my README.md isn't strong at the head and weak in the end).

 - Improve on my [select-name.html](https://medothings.github.io/Kingdom-of-Stobby/select-name.html) because right now it is just horrible
 - So in my select-name.html, I want to
   - Make the text responsive
     - Change size but still be readable
   - Make the images responsive
     - Change size
     - Wrap when the size of each image is too small
     - Have a `max-width` so that each image is not too big
   - Make the button smaller but still keep the text in the middle of the page (you'll see what I mean (I hope) if you actually go to the website)
   - Make the overall look of the webpage better 
     - Right now I still am not sure what to change, so I'll just rely on my ideas when I actually start trying to make it look better
   - And of course, other than my bigger plans for the webpage there are also smaller things which I won't bother listing but if you really want to know, it includes stuff like 
     - changing the images
     - changing the font of the heading etc.
  
### Credits
So since I already listed the credits to how my landing page looks and all, this Credits section only applies to the pictures that I used in my landing page.

- The image of the smiley face (which in case you don't know, is the flag of the Kingdom of Stobby because happiness, it's important) is by [Md Tanvirul Haque](https://www.flaticon.com/authors/md-tanvirul-haque) from [flaticon.com](https://www.flaticon.com/)
- The image of the castle (which is NOT a picture of the Kingdom of Stobby) is by [brgfx](https://www.freepik.com/author/brgfx) from [freepik.com](https://www.freepik.com/)
- The images of the fruits are by [Icongeek26](https://www.flaticon.com/authors/icongeek26) also from [flaticon.com](https://www.flaticon.com/)
  
### Any issues
Since I worked on this piece of code for so long, of course there are no problems at all. I mean, if there were any problems, I would have fixed them by now. Right?

-None
