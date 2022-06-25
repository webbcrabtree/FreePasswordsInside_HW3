const pword_strings = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    special: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

function genPassword() {
    var password = ""

    let length = prompt("Enter a number from 8 to 128 for password length.")

    var lowers = confirm("Would you like to use lowercase letters?")
    if (lowers) {
        password += pword_strings.lower;
    };

    var uppers = confirm("Would you like to use uppercase letters?")
    if (uppers) {
        password += pword_strings.upper;
    };

    var specials = confirm("Would you like to use special characters?")
    if (specials) {
        password += pword_strings.special;
    };

    var numbers = confirm("Would you like to use numbers?")
    if (numbers) {
        password += pword_strings.number;
    };
    var newPassword = "";
    for (let i = 0; i < length; i++) {
        newPassword += password[Math.floor(Math.random() * password.length)]
    }
    document.getElementById("clickMe").addEventListener("click", function () {
        genPassword();
    })
        return newPassword,
        document.querySelector('p').innerHTML = newPassword;
    };

