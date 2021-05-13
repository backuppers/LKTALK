import e, { Router, Request, Response, NextFunction } from 'express';
import loginRouter from './login';
import chatRouter from './chat';

const router: Router = Router();

router.use('/login', loginRouter);
router.use('/chat', chatRouter);

router.get('/', (req: Request, res: Response) => {
  res.redirect('/login');
})

// router.use((req: Request, res: Response, next: NextFunction) => {
//   res.status(404);
//   res.send('404 error!');
// })

export default router;