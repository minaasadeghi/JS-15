// ? Question-1:follow these steps:
// todo-1:Select the body tag and apply this color to the background "#0a122d"
// todo-2:select image and set margin "4rem 0"
// todo-3:Apply a rounded border to the image and set its size to "1 rem"
// todo-4:Select h1 and h5 tags and place them in the appropriate position according to the image.(you can check help folder)
// !Answer:

document.body.style.backgroundColor = "#0a122d";

const image = document.querySelector('img');
image.style.margin = "4rem 0";
image.style.borderRadius = "1rem";
image.style.width = "100%";
image.style.maxWidth = "600px";

const title = document.querySelector('.hero__title');
const subtitle = document.querySelector('.hero__subtitle');

title.style.position = "absolute";
subtitle.style.position = "absolute";

title.style.textAlign = "center";
subtitle.style.textAlign = "center";

title.style.color = "white";
subtitle.style.color = "white";

title.style.top = "25%";
subtitle.style.top = "35%";

title.style.width = "100%";
subtitle.style.width = "100%";
