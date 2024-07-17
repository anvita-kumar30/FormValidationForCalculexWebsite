document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const fields = [
        'fullName',
        'dob',
        'email',
        'phone',
        'password',
        'confirmPassword',
        'state',
        'city',
        'gender'
    ];

    function validateField(index) {
        let isValid = true;

        switch (index) {
            case 0: // Full Name validation
                const fullName = document.getElementById('fullName').value;
                const nameError = document.getElementById('nameError');
                if (fullName.length < 5) {
                    nameError.textContent = 'Name must be at least 5 characters long.';
                    isValid = false;
                } else {
                    nameError.textContent = '';
                }
                break;
            case 1: // Birthdate validation
                const birthdate = document.getElementById('dob').value;
                const birthdateError = document.getElementById('birthdateError');
                if (!birthdate) {
                    birthdateError.textContent = 'Please select your birthdate.';
                    isValid = false;
                } else {
                    birthdateError.textContent = '';
                }
                break;
            case 2: // Email validation
                const email = document.getElementById('email').value;
                const emailError = document.getElementById('emailError');
                if (!email.includes('@')) {
                    emailError.textContent = 'Please enter a valid email address';
                    isValid = false;
                } else {
                    emailError.textContent = '';
                }
                break;
            case 3: // Phone Number validation
                const phone = document.getElementById('phone').value;
                const phoneError = document.getElementById('phoneError');
                if (phone.length !== 10 || phone === '123456789') {
                    phoneError.textContent = 'Phone number must be a 10-digit number.';
                    isValid = false;
                } else {
                    phoneError.textContent = '';
                }
                break;
            case 4: // Password validation
                const password = document.getElementById('password').value;
                const fullNameValue = document.getElementById('fullName').value;
                const passwordError = document.getElementById('passwordError');
                if (password.length < 8 || password === 'password' || password === fullNameValue) {
                    passwordError.textContent = 'Password must be at least 8 characters.';
                    isValid = false;
                } else {
                    passwordError.textContent = '';
                }
                break;
            case 5: // Confirm Password validation
                const confirmPassword = document.getElementById('confirmPassword').value;
                const passwordValue = document.getElementById('password').value;
                const confirmPasswordError = document.getElementById('confirmPasswordError');
                if (passwordValue !== confirmPassword) {
                    confirmPasswordError.textContent = 'Please ensure the passwords match.';
                    isValid = false;
                } else {
                    confirmPasswordError.textContent = '';
                }
                break;
            case 6: // State validation
                const state = document.getElementById('state').value;
                const stateError = document.getElementById('stateError');
                if (state === '') {
                    stateError.textContent = 'Please select your state.';
                    isValid = false;
                } else {
                    stateError.textContent = '';
                }
                break;
            case 7: // City validation
                const city = document.getElementById('city').value;
                const cityError = document.getElementById('cityError');
                if (!city) {
                    cityError.textContent = 'Please enter your city.';
                    isValid = false;
                } else {
                    cityError.textContent = '';
                }
                break;
            case 8: // Gender validation
                const gender = document.querySelector('input[name="gender"]:checked');
                const genderError = document.getElementById('genderError');
                if (!gender) {
                    genderError.textContent = 'Please select your gender.';
                    isValid = false;
                } else {
                    genderError.textContent = '';
                }
                break;
        }

        return isValid;
    }

    form.addEventListener('input', function(event) {
        const fieldIndex = fields.indexOf(event.target.id);
        if (validateField(fieldIndex)) {
            if (fieldIndex < fields.length - 1) {
                document.getElementById(fields[fieldIndex + 1]).disabled = false;
            }
        } else {
            for (let i = fieldIndex + 1; i < fields.length; i++) {
                document.getElementById(fields[i]).disabled = true;
            }
        }

        // Enable the submit button if all fields are valid
        let allValid = true;
        for (let i = 0; i < fields.length; i++) {
            if (!validateField(i)) {
                allValid = false;
                break;
            }
        }
        document.querySelector('input[type="submit"]').disabled = !allValid;
    });

    form.addEventListener('submit', function(event) {
        for (let i = 0; i < fields.length; i++) {
            if (!validateField(i)) {
                event.preventDefault();
                return;
            }
        }
        // Redirect to index.html upon successful validation
        window.location.href = '../../index.html';
    });
});
