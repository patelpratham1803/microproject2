import express from 'express';
import { createDocument, getDocuments } from '../controllers/controller.js';
const router = express.Router();
router.post('/create', createDocument);
router.get('/', getDocuments);
export default router;