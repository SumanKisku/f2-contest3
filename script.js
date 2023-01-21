// form validation
function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    if(name.value === password.value || email.value === password) {
        alert("Password can not be same as name or email");
    }
}