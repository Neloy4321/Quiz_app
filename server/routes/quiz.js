const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Get Random 10 Questions
router.get('/questions', async (req, res) => {
    try {
        const questions = await Question.aggregate([{ $sample: { size: 10 } }]);

        // Check if we have at least 10 questions
        if (questions.length < 10) {
            return res.status(400).json({ message: "Not enough unique questions in the database!" });
        }

        res.status(200).json(questions);
    } catch (error) {
        console.error("Error fetching questions:", error);
        res.status(500).json({ message: "Failed to fetch questions" });
    }
});

module.exports = router;
