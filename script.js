document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('.content');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        content.classList.toggle('move-down');
    });

    

    // Form validation
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === "") {
            alert("Please enter your name");
            return;
        }
        if (email === "" || !emailPattern.test(email)) {
            alert("Please enter a valid email address");
            return;
        }
        if (message === "") {
            alert("Please enter your message");
            return;
        }

        // If all validations pass, submit the form
        alert("Form submitted successfully!");
        form.submit();
    });
});
