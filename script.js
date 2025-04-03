document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("form-response").textContent = "Danke! Ihre Nachricht wurde gesendet.";
    });
});
