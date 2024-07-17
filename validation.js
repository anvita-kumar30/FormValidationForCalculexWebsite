document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    function validateField() {
        let isValid = true;

        // Clear previous error messages
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('phoneError').textContent = '';
        document.getElementById('passwordError').textContent = '';
        document.getElementById('confirmPasswordError').textContent = '';
        document.getElementById('birthdateError').textContent = '';
        document.getElementById('stateError').textContent = '';
        document.getElementById('cityError').textContent = '';
        document.getElementById('genderError').textContent = '';

        // Full Name validation
        const fullName = document.getElementById('fullName').value;
        const nameError = document.getElementById('nameError');
        if (fullName.length < 5) {
            nameError.textContent = 'Name must be at least 5 characters long.';
            isValid = false;
        }

        // Email validation
        const email = document.getElementById('email').value;
        const emailError = document.getElementById('emailError');
        if (!email.includes('@')) {
            emailError.textContent = 'Enter a valid email.';
            isValid = false;
        }

        // Phone Number validation
        const phone = document.getElementById('phone').value;
        const phoneError = document.getElementById('phoneError');
        if (phone.length !== 10 || phone === '123456789') {
            phoneError.textContent = 'Phone number must be a 10-digit number and cannot be 123456789.';
            isValid = false;
        }

        // Password validation
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const passwordError = document.getElementById('passwordError');
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        if (password.length < 8 || password === 'password' || password === fullName) {
            passwordError.textContent = 'Password must be at least 8 characters long and cannot be "password" or your name.';
            isValid = false;
        }

        if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            isValid = false;
        }

        // Birthdate validation
        const birthdate = document.getElementById('birthdate').value;
        const birthdateError = document.getElementById('birthdateError');
        if (!birthdate) {
            birthdateError.textContent = 'Please select your birthdate.';
            isValid = false;
        }

        // State validation
        const state = document.getElementById('state').value;
        const stateError = document.getElementById('stateError');
        if (state === '') {
            stateError.textContent = 'Please select your state.';
            isValid = false;
        }

        // City validation
        const city = document.getElementById('city').value;
        const cityError = document.getElementById('cityError');
        if (!city) {
            cityError.textContent = 'Please enter your city.';
            isValid = false;
        }

        // Gender validation
        const gender = document.querySelector('input[name="gender"]:checked');
        const genderError = document.getElementById('genderError');
        if (!gender) {
            genderError.textContent = 'Please select your gender.';
            isValid = false;
        }

        return isValid;
    }

    form.addEventListener('submit', function(event) {
        if (!validateField()) {
            event.preventDefault();
        }
    });

    // Add input and change event listeners to form fields
    document.getElementById('fullName').addEventListener('input', validateField);
    document.getElementById('email').addEventListener('input', validateField);
    document.getElementById('phone').addEventListener('input', validateField);
    document.getElementById('password').addEventListener('input', validateField);
    document.getElementById('confirmPassword').addEventListener('input', validateField);
    document.getElementById('birthdate').addEventListener('change', validateField);
    document.getElementById('state').addEventListener('change', validateField);
    document.getElementById('city').addEventListener('input', validateField);
    document.querySelectorAll('input[name="gender"]').forEach(function(radio) {
        radio.addEventListener('change', validateField);
    });
});
