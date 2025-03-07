//requiring the express library
const express = require("express");

//requiring the mysql module
const mysql = require("mysql2");

//requiring the cors module
const cors = require("cors");

//sets up server
const app = express();
app.use(cors()); // Allow cross-origin requests (server and client can be on different ports)
app.use(express.json()); // Allow JSON requests

// Database connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Siyambuka123",
    database: "people"
});

// Connect to MySQL
con.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL");
});

// Create 'user' table if not exists
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS user (
    name VARCHAR(255),
    age INT,
    email VARCHAR(255)
  )
`;
con.query(createTableQuery, (err) => {
    if (err) throw err;
    console.log("User table ready");
});

// 🔹 Insert user
app.post("/addUser", (req, res) => {
    const { name, age, email } = req.body;
    const sql = "INSERT INTO user (name, age, email) VALUES (?, ?, ?)";
    con.query(sql, [name, age, email], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "User added!", id: result.insertId });
    });
});

// 🔹 Get all users
app.get("/getUsers", (req, res) => {
    const sql = "SELECT * FROM user";
    con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

// 🔹 Get user by email
app.get("/getUser", (req, res) => {
    const { email } = req.query;
    const sql = "SELECT * FROM user WHERE email = ?";
    con.query(sql, [email], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result[0]);
    });
});

// 🔹 Delete user
app.delete("/deleteUser", (req, res) => {
    const { email } = req.body;
    const sql = "DELETE FROM user WHERE email = ?";
    con.query(sql, [email], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "User deleted!" });
    });
});

// 🔹 Update user
app.put("/updateUser", (req, res) => {
    const { name, age, email } = req.body;
    const sql = "UPDATE user SET name = ?, age = ? WHERE email = ?";
    con.query(sql, [name, age, email], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "User updated!" });
    });
});

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
