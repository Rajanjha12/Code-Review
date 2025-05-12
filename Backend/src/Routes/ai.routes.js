import express from 'express';
import { getReview } from '../Controller/ai.controller.js';  // Correctly imported function

const router = express.Router();
/* rontend to backend commuication karne keliye post use karte hai */
router.post("/get-review",getReview);  // Route uses getResponse

export default router;
