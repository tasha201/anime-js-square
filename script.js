let container = document.querySelector(".container");
for (let i = 1; i <= 900; i++) {
  let dot = document.createElement("div");
  dot.classList.add("element");
  container.appendChild(dot);
}

let grid = [30, 30];
let dotAll = document.querySelectorAll(".element");
let animation = anime.timeline({
  targets: dotAll,
  easing: "easeInOutExpo",
  loop: true,
})

animation
.add({
  rotate: function () { return anime.random(-360, 360) },
  translateY: function () { return anime.random(-150, 150) },
  translateX: function () { return anime.random(-150, 150) },
  delay: anime.stagger(100, { grid: grid, from: "" }),
  keyframes: [
    {
      background: "#9D95FF"
    },
    {
      background: "#FEE2C9"
    },
    {
      background: "#00BAE2"
    },
    {
      background: "#FEC5FB"
    },
    {
      background: "#ffee01"
    },
    {
      background: "#333"
    },
  ]
})
.add({
  rotate: function () { return anime.random(-360, 360) },
  translateY: function () { return anime.random(-150, 150) },
  translateX: function () { return anime.random(-150, 150) },
  delay: anime.stagger(100, { grid: grid, from: "center" }),
  keyframes: [
    {
      background: "#B6B4E7"
    },
    {
      background: "#FEC5FB"
    },
    {
      background: "#E48E9F"
    },
    {
      background: "#ffee01"
    },
    {
      background: "#9D95FF"
    },
    {
      background: "#00BAE2"
    },
  ]
})
.add({
  rotate: function () { return anime.random(0, 0) },
  translateY: function () { return anime.random(0, 0) },
  translateX: function () { return anime.random(0, 0) },
  delay: anime.stagger(100, { grid: grid, from: "last" }),
  keyframes: [
    {
      background: "#fff"
    },
    {
      background: "#333"
    },
  ]
})