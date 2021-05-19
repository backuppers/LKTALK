import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  req.session.username ? 
  res.render('chat') :
  res.redirect('/login');
});

export default router;