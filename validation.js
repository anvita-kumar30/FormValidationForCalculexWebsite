document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        let isValid = true;

        // Full Name validation
        const fullName = document.getElementById('fullName').value;
        const nameError = document.getElementById('nameError');
        if (fullName.length < 5) {
            nameError.textContent = 'Name must be at least 5 characters long.';
            isValid = false;
            event.preventDefault();
        } else {
            nameError.textContent = '';
        }

        // Birthdate validation
        const birthdate = document.getElementById('birthdate').value;
        const birthdateError = document.getElementById('birthdateError');
        if (!birthdate) {
            birthdateError.textContent = 'Please select your birthdate.';
            isValid = false;
            event.preventDefault();
        } else {
            birthdateError.textContent = '';
        }
        
        // Email validation
        const email = document.getElementById('email').value;
        const emailError = document.getElementById('emailError');
        if (!email.includes('@')) {
            emailError.textContent = 'Enter a valid email.';
            isValid = false;
            event.preventDefault();
        } else {
            emailError.textContent = '';
        }

        // Phone Number validation
        const phone = document.getElementById('phone').value;
        const phoneError = document.getElementById('phoneError');
        if (phone.length !== 10 || phone === '123456789') {
            phoneError.textContent = 'Phone number must be a 10-digit number and cannot be 123456789.';
            isValid = false;
            event.preventDefault();
        } else {
            phoneError.textContent = '';
        }

        // Password validation
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const passwordError = document.getElementById('passwordError');
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        if (password.length < 8 || password === 'password' || password === fullName) {
            passwordError.textContent = 'Password must be at least 8 characters long and cannot be "password" or your name.';
            isValid = false;
            event.preventDefault();
        } else {
            passwordError.textContent = '';
        }

        if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            isValid = false;
            event.preventDefault();
        } else {
            confirmPasswordError.textContent = '';
        }

        // State validation
        const state = document.getElementById('state').value;
        const stateError = document.getElementById('stateError');
        if (state === '') {
            stateError.textContent = 'Please select your state.';
            isValid = false;
            event.preventDefault();
        } else {
            stateError.textContent = '';
        }

        // City validation
        const city = document.getElementById('city').value;
        const cityError = document.getElementById('cityError');
        if (!city) {
            cityError.textContent = 'Please enter your city.';
            isValid = false;
            event.preventDefault();
        } else {
            cityError.textContent = '';
        }

        // Gender validation
        const gender = document.querySelector('input[name="gender"]:checked');
        const genderError = document.getElementById('genderError');
        if (!gender) {
            genderError.textContent = 'Please select your gender.';
            isValid = false;
            event.preventDefault();
        } else {
            genderError.textContent = '';
        }

        // Prevent form submission if isValid is false
        if (isValid == false) {
            event.preventDefault();
        }
    });
});