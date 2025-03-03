document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll to bottom when clicking the button
    const aboutButton = document.querySelector(".about-btn");

    if (aboutButton) {
        aboutButton.addEventListener("click", function () {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let skillBars = document.querySelectorAll(".skill-per");

    skillBars.forEach((bar) => {
        let width = bar.getAttribute("per");
        bar.style.width = width;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill");
    const skillBars = document.querySelectorAll(".skill-per");

    function showSkills() {
        let windowHeight = window.innerHeight;
        skills.forEach(skill => {
            let skillPosition = skill.getBoundingClientRect().top;
            if (skillPosition < windowHeight - 100) {
                skill.style.opacity = "1";
                skill.style.transform = "translateY(0)";
            }
        });

        skillBars.forEach(bar => {
            let width = bar.getAttribute("data-width");
            bar.style.width = width;

            let valueBox = bar.querySelector(".skill-value");
            valueBox.innerText = width;
        });
    }

});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const serviceID = 'service_iviqbq7'; // Service ID
    const templateID = 'template_i01so1l'; // Template ID
    const userID = '50-wiDDFWYiX12oML'; // User ID

    // EmailJS orqali xabar yuborish
    emailjs.send(serviceID, templateID, {
        from_name: name,
        from_email: email,
        message: message,
        reply_to: email // Foydalanuvchining email manzilini qo'shish
    }, userID)
    .then(() => {
        alert('Xabar muvaffaqiyatli yuborildi!');
        document.getElementById('contact-form').reset(); // Formani tozalash
    }, (err) => {
        alert('Xabar yuborishda xatolik yuz berdi, iltimos qayta urunib ko\'ring.');
        console.error(err); // Xatoni konsolga chiqarish
    });
});

