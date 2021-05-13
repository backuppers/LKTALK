import { Router, Request, Response } from 'express';

const router = Router();

router.get('/test1', (req, res) => {
  res.send('this is /login/test1');
});

export default router;