# Frontend Mentor - Interactive rating component

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![A feedback rating card that gives the users a chance to score their experience out of 5.](/Screenshots/Desktop-Screenshot-Interactive-rating-component.png)

![A feedback rating card that gives the users a chance to score their experience out of 5.](/Screenshots/Desktop-Screenshot-Interactive-rating-component-Thank-You.png)

![A feedback rating card that gives the users a chance to score their experience out of 5.](/Screenshots/Mobile-Screenshot-375px-Interactive-rating-component.png)

### Links

- Solution URL: https://matthew-millard.github.io/interactive-rating-component/

## My process

### Built with

- HTML
- CSS
- JavaScript
- Flexbox
- Mobile-first workflow

### What I learned

- I learnt that you can strip radio buttons from their default styles and completely custom rebuild them.

- Using the onclick attribute on the submit button to call the function in JavaScript.

- Using an ::after pseudo element for the first time.

- Just learnt about the forEach() method, so it was awesome to be able to apply it to this challenge.

```html
<div class="checked-box-container">
  <input class="checked-box__item box-1" type="radio" value="1" name="rating" />
  <input class="checked-box__item box-2" type="radio" value="2" name="rating" />
  <input class="checked-box__item box-3" type="radio" value="3" name="rating" />
  <input class="checked-box__item box-4" type="radio" value="4" name="rating" />
  <input class="checked-box__item box-5" type="radio" value="5" name="rating" />
</div>

<button class="submit-btn" type="submit" value="Submit" onclick="submitScore()">
  Submit
</button>
```

```css
input {
  appearance: none;
}

.checked-box__item::after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  color: hsl(0, 0%, 90%);
}

.box-1::after {
  content: "1";
}

.box-2::after {
  content: "2";
}

.box-3::after {
  content: "3";
}

.box-4::after {
  content: "4";
}

.box-5::after {
  content: "5";
}

.checked-box__item:checked {
  background-color: hsl(217, 12%, 63%);
}
```

```js
function submitScore() {
  const scores = document.getElementsByName("rating");
  const thankYouStatement = document.getElementById("#thank-you-statement");

  scores.forEach((score) => {
    if (score.checked) {
      console.log(score.value);

      document.querySelector(".component__content").innerHTML =
        thankYouStatement;
      const message = `You selected ${score.value} out of 5`;
      document.querySelector(".thank-you-message").innerHTML = message;
      document.getElementById("thank-you-statement").style.display = "initial";
    }
  });
}
```

### Continued development

- Become more familiar with the BEM naming convention.
- Keep progressing with JavaScript and focusing on the fundamentals.
- Develop a better workflow.

## Author

- Frontend Mentor - [@matthew-millard](https://www.frontendmentor.io/profile/matthew-millard)

- Github - [matthew-millard](https://github.com/matthew-millard)

## Acknowledgments

- Kevin Powell - [](https://www.kevinpowell.co/)

- Zell - [](https://learnjavascript.today/)