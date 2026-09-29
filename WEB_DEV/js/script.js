
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
}

const typingEl = document.getElementById('typing');

if (typingEl) {
    const words = ['BSIT Student', 'Goal-oriented Developer', '3rd-Year'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typingEl.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingEl.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 70 : 130;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 400;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
}

const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', function() {
    if (topBtn) {
        if (window.scrollY > 300) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    }
});

if (topBtn) {
    topBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
const skillFills = document.querySelectorAll('.fill');

if (skillFills.length > 0) {
    // I-set una tanan width sa 0
    skillFills.forEach(function(fill) {
        fill.style.width = '0';
    });

    // Paghulat og 300ms, unya i-animate
    setTimeout(function() {
        skillFills.forEach(function(fill) {
            const targetWidth = fill.getAttribute('data-width');
            fill.style.width = targetWidth;
        });
    }, 300);
}
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');
        const successMsg = document.getElementById('successMsg');

        // Clear previous messages
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        successMsg.textContent = '';

        let isValid = true;

        // Validate name
        if (name === '') {
            nameError.textContent = 'Please type your name.';
            isValid = false;
        } else if (name.length < 2) {
            nameError.textContent = 'Give atleast 2 characters name.';
            isValid = false;
        }

        // Validate email
        if (email === '') {
            emailError.textContent = 'type your email.';
            isValid = false;
        } else if (!email.includes('@') || !email.includes('.')) {
            emailError.textContent = 'Invalid email address.';
            isValid = false;
        }

        // Validate message
        if (message === '') {
            messageError.textContent = 'Type your message.';
            isValid = false;
        } else if (message.length < 5) {
            messageError.textContent = 'atleast 5 charactersof message.';
            isValid = false;
        }

        // Show success
        if (isValid) {
            successMsg.textContent = 'Thank you. We received your message.';
            contactForm.reset();

            setTimeout(function() {
                successMsg.textContent = '';
            }, 4000);
        }
    });
}
