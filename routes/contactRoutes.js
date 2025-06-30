import express from 'express';
import {
  submitContactForm,
  getAllMessages
} from '../controllers/contactController.js';

const router = express.Router();

router.post('/', submitContactForm);     // Public: Submit form
router.get('/all', getAllMessages);      // Admin: View all messages

export default router;
