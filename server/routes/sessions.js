import express from 'express';

import { CreateSession } from '../controllers/sessions.js';

const router = express.Router();

router.post('/new', CreateSession);

export default router;