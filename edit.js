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

  // Display all existing users with the updated list
  displayAllUsers();
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

    // Create an "Edit" button for each user
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editUser(index)); // Attach the edit function

    listItem.appendChild(editButton);

    usersContainer.appendChild(listItem);
  });
}

// Function to edit a user's email
function editUser(index) {
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Get the user object to edit
  const userToEdit = existingUsers[index];

  // Display a form for editing the email
  const editForm = document.createElement("form");
  editForm.innerHTML = `
    <label for="editedEmail">New Email:</label>
    <input type="text" id="editedEmail" value="${userToEdit.email}">
    <button onclick="updateUserEmail(${index})">Update</button>
  `;

  // Replace the user item with the edit form
  const listItem = document.querySelector(`#users li:nth-child(${index + 1})`);
  listItem.replaceWith(editForm);
}

// Function to update a user's email
function updateUserEmail(index) {
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Get the edited email
  const editedEmail = document.getElementById("editedEmail").value;

  // Update the user's email
  existingUsers[index].email = editedEmail;

  // Store the updated array back in local storage
  localStorage.setItem("users", JSON.stringify(existingUsers));

  // Re-display all users with the updated list
  displayAllUsers();
}

// Display all existing users when the page loads
displayAllUsers();
