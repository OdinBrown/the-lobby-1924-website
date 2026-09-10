// =========================
// AUTOMATIC FOOTER YEAR
// =========================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


// =========================
// NAVBAR ON SCROLL
// =========================

const header = document.querySelector("header");


function updateNavbar() {

    if (!header) return;


    if (window.scrollY > 50) {

        header.style.background = "rgba(10, 10, 10, 0.95)";

        header.style.backdropFilter = "blur(10px)";

        header.style.webkitBackdropFilter = "blur(10px)";

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
// AUTOMATIC REVIEW SLIDER
// =========================

const reviews = document.querySelectorAll(".review");

const dots = document.querySelectorAll(".dot");


let currentReview = 0;


function showReview(index) {

    reviews.forEach(review => {

        review.classList.remove("active");

    });


    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    reviews[index].classList.add("active");


    if (dots[index]) {

        dots[index].classList.add("active");

    }

}


// CHANGE REVIEW EVERY 4 SECONDS

if (reviews.length > 0) {

    setInterval(() => {

        currentReview++;

        if (currentReview >= reviews.length) {

            currentReview = 0;

        }

        showReview(currentReview);

    }, 4000);

}