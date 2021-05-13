import e, { Router, Request, Response, NextFunction } from 'express';
import loginRouter from './login';

const router: Router = Router();

router.use('/login', loginRouter);

router.get('/', (req: Request, res: Response) => {
  res.render('index');
})

// router.use((req: Request, res: Response, next: NextFunction) => {
//   res.status(404);
//   res.send('404 error!');
// })

export default router;