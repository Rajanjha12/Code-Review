import aiService from "../services/ai.service.js";

export const getReview = async (req, res) => {
    const code = req.body.code; // Extract prompt from request body

    if (!code) {
        return res.status(400).json({ error: 'code  is required' });
    }

    try {
        const response = await aiService(code); // Call the AI service with the prompt
        res.send(response); // or use res.json({ response }) if it's JSON
    } catch (error) {
        console.error("AI Service Error:", error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
