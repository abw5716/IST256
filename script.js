// script.js
function displayJSON(event) {
    event.preventDefault();  // Prevent form from refreshing the page

    // Get form field values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Simple password confirmation check
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Create JSON object
    const userData = {
        username: username,
        email: email,
        password: password
    };

    // Display JSON object on the page
    document.getElementById("jsonOutput").textContent = JSON.stringify(userData, null, 2);
}