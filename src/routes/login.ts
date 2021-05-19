import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => { 
  req.session.username ?
  res.redirect('/chat') : 
  res.render('login');
});

router.post('/', (req: Request, res: Response) => {
  req.session.username = req.body.username;
  res.redirect('/chat');
});

export default router;