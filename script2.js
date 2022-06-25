// character strings (user determined variables to be used in password generation)
const pword_strings = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    special: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

function genPassword() {
    var password = ""
// Prompts for user to select password variables
    // Password length prompt (number input)
    let length = prompt("Enter a number from 8 to 128 for password length.")

    // Lowercase confirm prompt (ok/cancel)
    var lowers = confirm("Would you like to use lowercase letters?")
    if (lowers) {
        password += pword_strings.lower;
    };

    // Uppercase confirm prompt (ok/cancel)
    var uppers = confirm("Would you like to use uppercase letters?")
    if (uppers) {
        password += pword_strings.upper;
    };

    // Special character confirm prompt (ok/cancel)
    var specials = confirm("Would you like to use special characters?")
    if (specials) {
        password += pword_strings.special;
    };

    // Number confirm prompt (ok/cancel)
    var numbers = confirm("Would you like to use numbers?")
    if (numbers) {
        password += pword_strings.number;
    };

    // Character randomization
    var newPassword = "";
    for (let i = 0; i < length; i++) {
        newPassword += password[Math.floor(Math.random() * password.length)]
    }

    // Click listener that executes function
    document.getElementById("clickMe").addEventListener("click", function () {
        genPassword();
    })
        return newPassword,

        // Places function output into HTML paragraph element
        document.querySelector('p').innerHTML = newPassword;
    };

