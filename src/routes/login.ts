import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.render('login');
});

router.post('/', (req: Request, res: Response) => {
  res.redirect('/chat')
});

export default router;