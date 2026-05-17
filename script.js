// Loader

window.addEventListener("load", function(){

  document.getElementById("loader").style.display = "none";
});


// Sticky Navbar

window.addEventListener("scroll", function(){

  let navbar = document.getElementById("navbar");

  navbar.classList.toggle("scrolled", window.scrollY > 50);
});


// Mobile Menu

const menuToggle = document.getElementById("menu-toggle");

const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {

  navMenu.classList.toggle("active");
});


// Close Menu On Click

document.querySelectorAll(".nav-link")
.forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("active");
  });
});


// Typing Animation

const text = "Train Hard • Stay Fit • Be Strong";

let index = 0;

function typeEffect(){

  if(index < text.length){

    document.getElementById("typing").innerHTML += text.charAt(index);

    index++;

    setTimeout(typeEffect, 100);
  }
}

typeEffect();


// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");

    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 30);
    }
    else{

      counter.innerText = target;
    }
  };

  updateCounter();
});


// Reveal Animation

function reveal(){

  let reveals = document.querySelectorAll(".reveal");

  reveals.forEach(section => {

    let windowHeight = window.innerHeight;

    let revealTop = section.getBoundingClientRect().top;

    let revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){

      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);

reveal();


// Active Navigation

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if(scrollY >= sectionTop - 150){

      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(link.getAttribute("href").includes(current)){

      link.classList.add("active");
    }
  });
});


// Back To Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){

    topBtn.style.display = "block";
  }
  else{

    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
});


// Contact Form Validation

document.getElementById("contactForm")
.addEventListener("submit", function(e){

  e.preventDefault();

  let name = document.getElementById("name").value.trim();

  let email = document.getElementById("email").value.trim();

  let message = document.getElementById("message").value.trim();

  if(name === "" || email === "" || message === ""){

    alert("Please fill all fields");

    return;
  }

  if(!email.includes("@")){

    alert("Please enter valid email");

    return;
  }

  alert("Message Sent Successfully");

  document.getElementById("contactForm").reset();
});


// BMI Calculator

function calculateBMI(){

  let height = document.getElementById("height").value;

  let weight = document.getElementById("weight").value;

  if(height === "" || weight === ""){

    alert("Please enter height and weight");

    return;
  }

  height = height / 100;

  let bmi = (weight / (height * height)).toFixed(2);

  let status = "";

  if(bmi < 18.5){

    status = "Underweight";
  }
  else if(bmi >= 18.5 && bmi < 25){

    status = "Normal Weight";
  }
  else if(bmi >= 25 && bmi < 30){

    status = "Overweight";
  }
  else{

    status = "Obese";
  }

  document.getElementById("bmi-result").innerHTML =
  `Your BMI is ${bmi} (${status})`;
}