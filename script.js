document.addEventListener("DOMContentLoaded", function () {
    // Menü-Funktionalität
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");
    const menuLinks = document.querySelectorAll(".nav-list a");

    menuToggle.addEventListener("click", function () {
        navList.classList.toggle("show");
    });

    // Menü automatisch schließen, wenn ein Link angeklickt wird
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            navList.classList.remove("show");
        });
    });

    // News-Funktionalität (Text ausklappen)
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            const moreText = this.previousElementSibling;
            if (moreText.style.display === "none" || moreText.style.display === "") {
                moreText.style.display = "block";
                this.textContent = "Weniger anzeigen";
            } else {
                moreText.style.display = "none";
                this.textContent = "Weiterlesen";
            }
        });
    });

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("form-response").textContent = "Danke! Ihre Nachricht wurde gesendet.";
    });
});
