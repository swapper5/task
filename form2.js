// index.js

function display() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Validate the form values
  if (name.trim() === "") {
    alert("Please enter a name.");
    return;
  }

  if (email.trim() === "") {
    alert("Please enter an email address.");
    return;
  }

  // Retrieve existing user data from local storage or create an empty array
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Create a new user object
  const userDetails = {
    name: name,
    email: email,
  };

  // Add the new user to the array
  existingUsers.push(userDetails);

  // Store the updated array back in local storage
  localStorage.setItem("users", JSON.stringify(existingUsers));

  // Clear the form fields if needed
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}

// Function to retrieve and display all users
function displayAllUsers() {
  const usersContainer = document.getElementById("users");
  usersContainer.innerHTML = "";

  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  if (existingUsers.length === 0) {
    usersContainer.innerHTML = "No users to display.";
    return;
  }

  existingUsers.forEach((user, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `User ${index + 1}: Name - ${user.name}, Email - ${user.email}`;
    usersContainer.appendChild(listItem);
  });
}

// Display all existing users when the page loads
displayAllUsers();
