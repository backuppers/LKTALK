import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => { 
  req.session.name ?
  res.redirect('/chat') : 
  res.render('login');
});

router.post('/', (req: Request, res: Response) => {
  req.session.name = req.body.nickname;
  res.redirect('/chat');
});

export default router;