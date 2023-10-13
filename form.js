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

  // Create an object to store the user details
  const userDetails = {
    name: name,
    email: email,
  };

  // Store the user details in local storage
  localStorage.setItem("userDetails", JSON.stringify(userDetails));

  console.log(`Name: ${name} Email: ${email}`);

  // You can also clear the form fields if needed
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}

function handleMouseOver() {
  console.log("Mouse over event occurred.");
}

function handleMouseOut() {
  console.log("Mouse out event occurred.");
}

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector(".btn");
  const form = document.getElementById("my-form");

  submitButton.addEventListener("click", display);
  form.addEventListener("mouseover", handleMouseOver);
  form.addEventListener("mouseout", handleMouseOut);
});
