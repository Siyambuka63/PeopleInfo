const API_URL = "http://localhost:3000";

const tablebody = document.getElementById("table-body");

// 🔹 Add user
function addUser() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;

    fetch(`${API_URL}/addUser?name=${name}&age=${age}&email=${email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, age, email })
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            getUsers();
        })
        .catch(error => console.error("Error:", error));
}

// 🔹 Get all users
function getUsers() {
    // Deletes rows
    tablebody.innerHTML = "";

    fetch(`${API_URL}/getUsers`)
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                let row = `<tr>
                            <td>${user.name}</td>
                            <td>${user.age}</td>
                            <td>${user.email}</td>
                        </tr>`;
                tablebody.innerHTML += row;
            });
        })
        .catch(error => console.error("Error:", error));
}

function getUser() {
    const email = document.getElementById("email").value;

    fetch(`${API_URL}/getUser?email=${email}`)
        .then(response => response.json())
        .then(user => {
            alert(user.name);
        })
        .catch(error => console.error("Error:", error));
}

// 🔹 Delete user
function deleteUser() {
    const email = document.getElementById("email").value;

    fetch(`${API_URL}/deleteUser`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        getUsers();
    })
    .catch(error => console.error("Error:", error));
}

// 🔹 Update user
function updateUser() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;

    fetch(`${API_URL}/updateUser`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, age, email })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        getUsers();
    })
    .catch(error => console.error("Error:", error));
}

// Load users on page load
getUsers();