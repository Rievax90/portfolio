

val name = document.getElementById('name');
val company = document.getElementById('company');
val phone = document.getElementById('phone');
val email = document.getElementById('email');
val message = document.getElementById('message');



// function for displaying text on-click

function showText() {

    document.getElementById("subText").innerHTML = "Thank you! Your message has been submitted.";

}

function val() {
    if (name == " ") {
        document.getElementById('alert').innerHTML = "please finnish filling out form";
    }
    else {
        true;
    }

    if (company == " ") {
        document.getElementById('alert').innerHTML = "please finnish filling out form";
    }
    else {
        true;
    }

    if (phone == " ") {
        document.getElementById('alert').innerHTML = "please finnish filling out form";
    }
    else {
        true;
    }

    if (email == " ") {
        document.getElementById('alert').innerHTML = "please finnish filling out form";
    }
    else {
        true;
    }

    if (message == " ") {
        document.getElementById('alert').innerHTML = "please finnish filling out form";
    }
    else {
        true;
    }

}
