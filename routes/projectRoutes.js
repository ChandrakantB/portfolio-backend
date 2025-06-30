import express from 'express';
import { getAllProjects, addProject } from '../controllers/projectController.js';

const router = express.Router();

router.get('/', getAllProjects);
router.post('/', addProject); // Optional for future admin panel

export default router;
