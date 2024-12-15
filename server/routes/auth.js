const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Signup Route
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    // Save new user
    const user = new User({ username, password });
    await user.save();
    return res.status(201).json({ message: "User created successfully" });
});

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Validate user credentials
    const user = await User.findOne({ username, password });
    if (user) {
        return res.status(200).json({ message: "Login successful" });
    } else {
        return res.status(401).json({ message: "Invalid credentials" });
    }
});

module.exports = router;
