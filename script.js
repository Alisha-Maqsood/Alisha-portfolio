// ===========================
// DARK / LIGHT THEME
// ===========================

const themeBtn = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
} else {
    themeBtn.textContent = "🌙";
}

// Toggle theme
themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeBtn.textContent = "🌙";
    }

});
// ===========================
// Typing Animation
// ===========================

const words = [
    "Python Developer",
    "Flask Developer",
    "AI Automation Engineer",
    "Full Stack Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex===words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(typeEffect,deleting?50:100);

}

typeEffect();
// ===========================
// Scroll Progress Bar
// ===========================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width =
    progress + "%";

});
// ===========================
// Scroll To Top Button
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
// ===========================
// Active Navbar
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
// ===========================
// Mobile Menu
// ===========================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});
// ============================
// EmailJS Contact Form
// ============================

emailjs.init({
    publicKey: "4P4ywlgZX4FSd3o7Y",
});

const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_8aqv26v",
        "template_jddq5ks",
        this
    )
    .then(function(){

         status.innerHTML = "✅ Thank you! Your message has been sent successfully.";
        status.style.color = "green";
        status.style.fontWeight = "600";
        form.reset();

    })
    .catch(function(error){

        status.innerHTML = "❌ Failed to send message.";
        status.style.color = "red";
        console.log(error);

    });

});