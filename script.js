// =========================
// FOOTER YEAR
// =========================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const header = document.querySelector("header");


function updateNavbar() {

    if (!header) return;


    if (window.scrollY > 50) {

        header.style.background = "rgba(25, 23, 20, 0.96)";

        header.style.backdropFilter = "blur(12px)";

        header.style.webkitBackdropFilter = "blur(12px)";

    } else {

        header.style.background = "transparent";

        header.style.backdropFilter = "none";

        header.style.webkitBackdropFilter = "none";

    }

}


updateNavbar();


window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
);


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },

    {

        threshold: 0.15,

        rootMargin: "0px 0px -40px 0px"

    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


// =========================
// HERO REVIEW SLIDER
// =========================

const reviews = document.querySelectorAll(".hero-review");

const dots = document.querySelectorAll(".hero-dot");


let currentReview = 0;


function showReview(index) {

    reviews.forEach(review => {

        review.classList.remove("active");

    });


    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    if (reviews[index]) {

        reviews[index].classList.add("active");

    }


    if (dots[index]) {

        dots[index].classList.add("active");

    }

}


if (reviews.length > 0) {

    setInterval(() => {

        currentReview++;


        if (currentReview >= reviews.length) {

            currentReview = 0;

        }


        showReview(currentReview);

    }, 4500);

}