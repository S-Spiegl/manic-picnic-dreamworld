import express from 'express';

import { CreateUser } from '../controllers/users.js';

const router = express.Router();

router.post('/add', CreateUser);

export default router;