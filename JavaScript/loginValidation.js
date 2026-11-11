function login(username, password) {
    if (username === "admin" && password === "password123") {
        console.log("Login successful!");
    } else {
        console.log("Invalid username or password.");
    }
}
login("admin", "password123"); // Output: Login successful!
login("user", "wrongpassword"); // Output: Invalid username or password.    