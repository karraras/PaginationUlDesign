let parent = document.querySelector(".parent");
let numbers = document.querySelector(".numbers");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let nums = document.querySelectorAll("span");
let before = document.querySelector(".before");
let after = document.querySelector(".after");
let preSpace = document.querySelector(".preSpace");
let aftSpace = document.querySelector(".AftSpace");
let step = 9;
let move = 400;
moveing(move, step);
parent.addEventListener("click", function (e) {
  namz = e.target.classList[0];
  if (step >= 1 && step <= 19) {
    if (namz == "prev") {
      move -= 50;
      step -= 1;
      moveing(move, step);
    }
  }
  if (step <= 18 && step >= 0) {
    if (namz == "next") {
      move += 50;
      step += 1;
      moveing(move, step);
    }
    if (move >= 800) {
      move = 800;
      moveing(move, step);
    }
  }
  parent.className = "parent";

  if (namz == "before" || namz == "one" || step == 0) {
    parent.classList.add(`one`);
    move = 0;
    step = 0;
    moveing(move, step);
  }
  if (namz == "two" || step == 1) {
    parent.classList.add(`two`);
    move = 0;
    step = 1;
    moveing(move, step);
  }
  if (namz == "three" || step == 2) {
    parent.classList.add(`three`);
    move = 0;
    step = 2;
    moveing(move, step);
  }
  if (namz == "four" || step == 3) {
    parent.classList.add(`four`);
    move = 100;
    step = 3;
    moveing(move, step);
  }
  if (namz == "five" || step == 4) {
    parent.classList.add(`five`);
    move = 150;
    step = 4;
    moveing(move, step);
  }
  if (namz == "six" || step == 5) {
    parent.classList.add(`six`);
    move = 200;
    step = 5;
    console.log(step);
    console.log(move);
    moveing(move, step);
  }
  if (namz == "seven" || step == 6) {
    parent.classList.add(`seven`);
    move = 250;
    step = 6;
    moveing(move, step);
  }
  if (namz == "eight" || step == 7) {
    parent.classList.add(`eight`);
    move = 300;
    step = 7;
    moveing(move, step);
  }
  if (namz == "nine" || step == 8) {
    parent.classList.add(`nine`);
    move = 350;
    step = 8;
    moveing(move, step);
  }
  if (namz == "ten" || step == 9) {
    parent.classList.add(`ten`);
    move = 400;
    step = 9;
    moveing(move, step);
  }
  if (namz == "eleven" || step == 10) {
    parent.classList.add(`eleven`);
    move = 450;
    step = 10;
    moveing(move, step);
  }
  if (namz == "twelve" || step == 11) {
    parent.classList.add(`twelve`);
    move = 500;
    step = 11;
    moveing(move, step);
  }
  if (namz == "thirteen" || step == 12) {
    parent.classList.add(`thirteen`);
    move = 550;
    step = 12;
    moveing(move, step);
  }
  if (namz == "fourteen" || step == 13) {
    parent.classList.add(`fourteen`);
    move = 600;
    step = 13;
    moveing(move, step);
  }
  if (namz == "fiveteen" || step == 14) {
    parent.classList.add(`fiveteen`);
    move = 650;
    step = 14;
    moveing(move, step);
  }
  if (namz == "sixteen" || step == 15) {
    parent.classList.add(`sixteen`);
    move = 700;
    step = 15;
    moveing(move, step);
  }
  if (namz == "seventeen" || step == 16) {
    parent.classList.add(`seventeen`);
    move = 750;
    step = 16;
    moveing(move, step);
  }
  if (namz == "eighteen" || step == 17) {
    parent.classList.add(`eighteen`);
    move = 800;
    step = 17;
    moveing(move, step);
  }
  if (namz == "nineteen" || step == 18) {
    parent.classList.add(`nineteen`);
    move = 800;
    step = 18;
    moveing(move, step);
  }
  if (namz == "twenty" || namz == "after" || step == 19) {
    parent.className = "parent";

    parent.classList.add(`twenty`);
    move = 800;
    step = 19;
    moveing(move, step);
  }
});
function moveing(move, step) {
  nums.forEach((ele) => {
    ele.style.transform = `translateX(-${move}px)`;
    ele.classList.remove("foucs");
  });
  nums[step].classList.add("foucs");
}
