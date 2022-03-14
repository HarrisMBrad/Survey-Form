import Contact from "../contact.js";

// Listener
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const contact = new Contact(form);
    showMessage("Sending your message... Thanks You: " + contact.fullName);
    contact.send();
});

mouseTarget.addEventListener("mouseenter", e => {
    console.log(e, "This e is logged");
    mouseTarget.style.background = "black";
    enterEventCount++;
    addListItem("This was a close contact..." + leaveEventCount + ".");
});


//Looking for experiences
for (let x = 0; x < experiences.length; x++) {
    const item = experiences[x];
    item.addEventListener("experience", function (mouseTarget) {
        mouseTarget.style.background = "#838383";
        leaveEventCount++;
        addListItem("This is a mouseenter event" + leaveEventCount + ".");
        mouseTarget.target.style = "#808080";
    });
}
item.addEventListener("mouseleave", function (mouseTarget) {
    mouseTarget.target.style = " ";
    preventDefault(mouseTarget);
});
clearMessage();

function validateForm() {
    // Using constarint API 
    isValid = form.checkValidity();


    // Styled main message for an error
    if (!isValid) {
        message.textContent = 'Please fill out all the fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Checkto see if passwords match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure your passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }

    // If form is valid and passwords match

    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }

}

function storedFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        password: form.password.value
    };

    // Do something with this data... server, database...
    console.log(user);

}


function processFormData(e) {
    e.preventDefault();
    console.log(e);

    // Validates Form
    validateForm();

    // Submit Data if valid...
    if (isValid && passwordsMatch) {
        storedFormData();
    }
}
processFormData();
// Event Listener

