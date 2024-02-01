document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Reset previous validation messages
        document.querySelectorAll(".error-message").forEach(function (span) {
            span.textContent = "";
        });

        // Validation for First Name
        const fname = document.getElementById("fname");
        if (fname.value.trim() === "") {
            document.getElementById("fname-error").textContent =
                "First Name cannot be empty";
            isValid = false;
        } else if (fname.value.trim().length < 5) {
            document.getElementById("fname-error").textContent =
                "First Name should be at least 5 characters long";
            isValid = false;
        } else if (!isNaN(fname.value.trim())) {
            document.getElementById("fname-error").textContent =
                "First Name cannot be a number";
            isValid = false;
        }
        

        // Validation for Last Name
        const lname = document.getElementById("lname");
        if (lname.value.trim() === "") {
            document.getElementById("lname-error").textContent =
                "Last Name cannot be empty";
            isValid = false;
        } else if (lname.value.trim().length < 5) {
            document.getElementById("lname-error").textContent =
                "Last Name should be at least 5 characters long";
            isValid = false;
        } else if (!isNaN(lname.value.trim())) {
            document.getElementById("lname-error").textContent =
                "Last Name cannot be a number";
            isValid = false;
        }

        // Validation for Password
        const pwd = document.getElementById("pwd");
        const cpwd = document.getElementById("cpwd");
        if (pwd.value.trim() === "") {
            document.getElementById("pwd-error").textContent =
                "Password cannot be empty";
            isValid = false;
        } else if (pwd.value !== cpwd.value) {
            document.getElementById("cpwd-error").textContent =
                "Passwords do not match";
            isValid = false;
        } else if (!/^[a-zA-Z0-9!@#$%^&*]{6,}$/.test(pwd.value.trim())) {
            document.getElementById("pwd-error").textContent =
                "Password should be at least 6 characters long and contain only letters, numbers, or special characters !@#$%^&*";
            isValid = false;
        }

        // Validation for Confirm Password
        if (cpwd.value.trim() === "") {
            document.getElementById("cpwd-error").textContent =
                "Confirm Password cannot be empty";
            isValid = false;
        } else if (pwd.value !== cpwd.value) {
            document.getElementById("cpwd-error").textContent =
                "Passwords do not match";
            isValid = false;
        } else if (!/^[a-zA-Z0-9!@#$%^&*]{6,}$/.test(cpwd.value.trim())) {
            document.getElementById("cpwd-error").textContent =
                "Confirm Password should be at least 6 characters long and contain only letters, numbers, or special characters !@#$%^&*";
            isValid = false;
        }

        // Validation for Email
        const email = document.getElementById("email");
        if (email.value.trim() === "") {
            document.getElementById("email-error").textContent =
                "Email cannot be empty";
            isValid = false;
        }

        // Validation for Phone
        const phone = document.getElementById("phone");
        if (phone.value.trim() === "") {
            document.getElementById("phone-error").textContent =
                "Phone cannot be empty";
            isValid = false;
        }

        // Phone format validation (optional)
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone.value.trim())) {
            document.getElementById("phone-error").textContent =
                "Invalid phone number format";
            isValid = false;
        }

        // Validation for Terms and Conditions
        const tc = document.getElementById("tc");
        if (!tc.checked) {
            document.getElementById("tc-error").textContent =
                "Please agree to the Terms and Conditions";
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    const resetButton = document.querySelector('button[type="reset"]');
    resetButton.addEventListener("click", function () {
        // Clear all error messages
        document.querySelectorAll(".error-message").forEach(function (span) {
            span.textContent = "";
        });
    });
});
