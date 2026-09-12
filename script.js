/* =========================
   SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach(function (element) {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* =========================
   MOBILE MENU
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuClose = document.getElementById("menuClose");

    if (!menuToggle || !mobileMenu || !menuClose) {
        return;
    }

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.add("active");
    });

    menuClose.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
        });

    });

});


/* =========================
   BOOKING FORM
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const bookingForm = document.getElementById("bookingForm");
    const formSuccess = document.getElementById("formSuccess");
    const bookingDate = document.getElementById("bookingDate");

    if (!bookingForm || !formSuccess) {
        return;
    }

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const requiredFields = bookingForm.querySelectorAll(
            "input[required], select[required]"
        );

        for (const field of requiredFields) {

            if (!field.value.trim()) {
                return;
            }

        }

        if (bookingDate && bookingDate.value) {

            const parts = bookingDate.value.split("-");

            if (parts.length !== 3 || parts[0].length !== 4) {
                return;
            }

            const year = Number(parts[0]);
            const month = Number(parts[1]);
            const day = Number(parts[2]);

            const selectedDate = new Date(
                year,
                month - 1,
                day
            );

            const today = new Date();

            today.setHours(0, 0, 0, 0);
            selectedDate.setHours(0, 0, 0, 0);

            if (
                selectedDate.getFullYear() !== year ||
                selectedDate.getMonth() !== month - 1 ||
                selectedDate.getDate() !== day ||
                selectedDate < today
            ) {
                return;
            }

        }

        formSuccess.style.display = "block";

        bookingForm.reset();

    });

});


/* =========================
   BACK TO TOP
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const backToTop = document.getElementById("backToTop");

    if (!backToTop) {
        return;
    }

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            backToTop.style.display = "flex";
        } else {
            backToTop.style.display = "none";
        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});