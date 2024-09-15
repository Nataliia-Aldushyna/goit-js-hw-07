const form = document.querySelector(".login-form"); 

form.addEventListener("submit", verifyForm);

function verifyForm(event) {
    event.preventDefault();
    
    const emailArray = Array.from(event.target.elements.email.value);
    const passArray = Array.from(event.target.elements.password.value);
    const isAllSpace = emailArray.every(char => char === " ") || passArray.every(char => char === " ");

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    
    if (email === "" || password === "" || isAllSpace ) {
        return alert("All form fields must be filled in");
    } else {
        const User = {
            email: email.trim(), 
            password: password.trim()
        }
        console.log(User);
        event.currentTarget.reset();
    };
};
