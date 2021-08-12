const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_text = document.querySelectorAll(".animated-bg-text");

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1628626664285-c4892adaacd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80" alt="Image" />';
  title.innerHTML = `Lorem ipsum dolor sit amet.`;
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequatur.";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  name.innerHTML = "Waleed ur Rehman";
  date.innerHTML = "Aug 12, 20210";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_text.forEach((bg) => bg.classList.remove("animated-bg-text"));
}

setTimeout(getData, 2500);
