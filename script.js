function handleRegistration(event) {
    event.preventDefault();
    const username = document.querySelector('.Register-form #register-username').value.trim();
    const phoneNumber = document.querySelector('.Register-form #register-phone').value.trim();
    const email = document.querySelector('.Register-form #register-email').value.trim();
    const password = document.querySelector('.Register-form #register-password').value.trim();
    const confirmPassword = document.querySelector('.Register-form #confirm-password').value.trim();

    if (!username || !phoneNumber || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 8 || password.length > 20) {
        alert("Password must be between 8 and 20 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Registration successful!");
}

function handleSignIn(event) {
    event.preventDefault();
    const signInUsername = document.querySelector('.login-form #sign-in-username').value.trim();
    const signInPassword = document.querySelector('.login-form #sign-in-password').value.trim();

    if (!signInUsername || !signInPassword) {
        alert("Please fill in both username and password.");
        return;
    }

    if (signInUsername.length < 5 || signInUsername.length > 20) {
        alert("Username must be between 5 and 20 characters.");
        return;
    }

    if (signInPassword.length < 8 || signInPassword.length > 20) {
        alert("Password must be between 8 and 20 characters.");
        return;
    }

    alert("Sign-in successful!");
}
const registrationForm = document.querySelector('.Register-form form');
registrationForm.addEventListener('submit', handleRegistration);

const signInForm = document.querySelector('.login-form form');
signInForm.addEventListener('submit', handleSignIn);