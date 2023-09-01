const nameRegex = /^[a-zA-Z ]+$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const ageRegex = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;

let isNameValid = false;
let isEmailValid = false;
let isPhoneValid = false;
let isAgeValid = false;
let isPasswordValid = false;
let isRepasswordValid = false;

$('input#name-input').on('input', function () {
    if (nameRegex.test(this.value)) {
        $('div#name-alert').slideUp(500);
        isNameValid = true;
    } else {
        $('div#name-alert').slideDown(500);
        isNameValid = false;
    }
    toggleButton();
});

$('input#email-input').on('input', function () {
    if (emailRegex.test(this.value)) {
        $('div#email-alert').slideUp(500);
        isEmailValid = true;
    } else {
        $('div#email-alert').slideDown(500);
        isEmailValid = false;
    }
    toggleButton();
});

$('input#phone-input').on('input', function () {
    if (phoneRegex.test(this.value)) {
        $('div#phone-alert').slideUp(500);
        isPhoneValid = true;
    } else {
        $('div#phone-alert').slideDown(500);
        isPhoneValid = false;
    }
    toggleButton();
});

$('input#age-input').on('input', function () {
    if (ageRegex.test(this.value)) {
        $('div#age-alert').slideUp(500);
        isAgeValid = true;
    } else {
        $('div#age-alert').slideDown(500);
        isAgeValid = false;
    }
    toggleButton();
});

$('input#password-input').on('input', function () {
    if (passwordRegex.test(this.value)) {
        $('div#password-alert').slideUp(500);
        isPasswordValid = true;
    } else {
        $('div#password-alert').slideDown(500);
        isPasswordValid = false;
    }
    toggleButton();
});

$('input#repassword-input').on('input', function () {
    if (this.value == $('input#password-input').val()) {
        $('div#repassword-alert').slideUp(500);
        isRepasswordValid = true;
    } else {
        $('div#repassword-alert').slideDown(500);
        isRepasswordValid = false;
    }
    toggleButton();
});

function toggleButton() {
    if (isNameValid && isEmailValid && isPhoneValid && isEmailValid && isAgeValid && isPasswordValid && isRepasswordValid) {
        $('button').removeAttr('disabled');
    }
    $('button').attr('disabled', disabled);
}