import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js';

import Contact from "./Contact.js";

// I need help to see if these look correct...???

// this db was first init for android.
// 886576841aaed9830c9be56358f58f3d6999ab12
const firebaseApp = initializeApp({
    apiKey: 'AIzaSyBlbDFoEU1MoS9tGayVgfrRbBP7caO20Mc',
    authDomain: 'org.ibg.brad.part4',
    projectId: 'listviewresults',
    storgageBucket: 'listviewresults.appspot.com',
    messagingSenderId: '279563219766',
    appId: '1:279563219766:android:d061c4ab97de7e9fa4f997',
    measurmentId: ''
});

const auth = getAuth(firebase);
const db = getFireStore(firebaseApp);
db.collection('todos').getDocs();
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);

// Detect auth state
auth.onAuthStateChanged(user => {

})
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in!');
    } else {
        consile.log('No User');
    }
});

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

