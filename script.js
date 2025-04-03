document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");

    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("show");
    });

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("form-response").textContent = "Danke! Ihre Nachricht wurde gesendet.";
    });
});
