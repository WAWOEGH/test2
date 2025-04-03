document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("form-response").textContent = "Danke! Ihre Nachricht wurde gesendet.";
});
