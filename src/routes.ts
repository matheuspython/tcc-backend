import { Router } from 'express';

const router = Router();

router.post('/authenticate');
router.post('/messages');
router.get('/messages/last3');
router.get('/profile');

export { router };
