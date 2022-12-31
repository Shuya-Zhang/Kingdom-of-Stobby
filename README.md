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
- How to give a rounded edge to something
``` css
button {border-radius: 5px}
```
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

## select-name.html
So this page is made because in the Kingdom of Stobby (which I will now start calling KOS because typing "the Kingdom of Stobby" just takes too much effort), there are quite a lot of people and when I list all of them on the book, they take up about 3 pages, and since there were sections on the book, I thought why not also have 3 sections on the website? And yes, I could simply make a pop-up, but since I started already, I decided to just finish it. Anyway, here's the link: [the live weblink](https://medothings.github.io/Kingdom-of-Stobby/select-name.html). You're welcome.

### What I learnt
Ok so since I did a lot of the learning part in the landing page, there wasn't lots to learn here, but I'll just write the few things that I learnt either way.
- When the name of the code suddenly turns red in VS code and it looks like nothing is wrong, simply get out the code and it will turn back to yellow (made changes but haven't commited yet) or white (commited already)
- Even though I did not use this, I did learn how to make the header part stay at the top of the screen even when you scroll down. Let me just write down that code real quick
``` css
.header {
    position: sticky;
    top: 0; 
    z-index: 1;
}
```
- Also did not use this, but I learnt how to make a popup centered (or bascically another way to center things)
``` css
.popup {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
```
- Ok this may sound lazy but sometimes, when there is something wrong, and you found a way to fix it but don't understand why it works, just move on (not gonna show an example).
- When you think you pressed "A" but nothing happened, that means you pressed caps lock (very annoying)

Ok this is kind of sad compared to how long my previous section was, but, I guess when you first start, you learn more things than you do later on, so...

### Ideas for future developement

Nothing really to write. But there are things I do want to finish in future though, so, here's the list of my ideas so far
- Try to make the webpage look better, because right now, yes it does look pretty and all, but the white part at the bottom? Not loving it
- Get the name lists done. I want it to look neat, simple, but still kinda complicated, you know? Like "Yes I look nice, but there's more to me than you think" ... or maybe not

I guess that's all I can finish in a couple of days, so...that list done

### Credits
- Arrow button [Kirill Kazachek](https://www.flaticon.com/authors/kirill-kazachek) from [Flaticon](https://www.flaticon.com/)
- Castle and farmhouse - [Freepik](https://www.flaticon.com/authors/freepik) from [Flaticon](https://www.flaticon.com/)
- Witch house - [fancykeith](https://www.flaticon.com/authors/fancykeith) from [Flaticon](https://www.flaticon.com/)

### Issues
Ok so it's not a huge issue or anything, but it is definetely worth addressing. Since it's like literally one thing, I won't bother using point form.

When you go into select-name.html, you will notice that at the top, it's colored, but at the bottom, it's just white. I'm not quite sure whether I like, or if I will change it. For now, I'll leave it the way it is, but in future I may or may not change it.

## Sign-up form
Again, before I start talking about all the boring stuff that I was forced to write, go visit [the live weblink](https://medothings.github.io/Kingdom-of-Stobby/).    
By the way, this page is based on [Project: Sign-up Form](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form) of the [Intermediate HTML and CSS Course](https://www.theodinproject.com/paths/full-stack-javascript/courses/intermediate-html-and-css) from [the Odin Project](https://www.theodinproject.com)

### What I learnt from creating this page

- Instead of saying `background-width: 100vw`, instead, simply say `background-size: cover`
- If you want something to not be in the middle of something else, say 
``` css
.logo {
  position: absolute;
  top: 25%;
}
```
so that the top of `.logo ` will be at 25% point of the height of your screen
- Sometimes, people say "Try not to use global variables as much as possible", but sometimes, you gotta do what you gotta do (also known as making a global variable)
  - Also if you don't know why not to use global variables, answer's easy. It's very easy to make mistakes when you make a variable global. For example, in one function, you want a variable called `number`, which is equal to 5, and in another function, you want another variable called `number`, except in this case, number is equal to 6. If you made the `number` variable global, your whole code would be messed up, therefore try not to use global variables as much as possible. You're welcome.
- If you see, my js code, there will be one part of it which is just constantly like this
```js
if (firstName.value.length < 2) {
      firstName.style.backgroundColor = "#f36c6c";
    } else {
      firstName.style.backgroundColor = "#ffffff";
    }
    if (lastName.value.length < 1) {
      lastName.style.backgroundColor = "#f36c6c";
    } else {
      firstName.style.backgroundColor = "#ffffff";
    }
```
and on and on and on
Like I said earlier, you gotta do what you gotta do
- When you want to test if there is a number in a string or not, say
``` js
let num = /\d/.test(password);
```
- And when you want to text for special characters
```js
let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);
```
Both of these will either return `true` or `false` which you can then use in an if statement

### Ideas for future developement
- Make the page responsive in the way such that when the page wraps, the logo will be in the middle of the image. I asked on Discord, and apparently, we will learn it, but further on in the course so I left it for now, but I'll probably get back to it later on when I do get to learn it. 
  
### Issues
Probably none except for the responsiveness