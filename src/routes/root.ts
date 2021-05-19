import { Router, Request, Response, NextFunction } from 'express';
import loginRouter from './login';
import chatRouter from './chat';

const router: Router = Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  if(!req.secure) { res.redirect('https://mj2sdev.ml') }
  else { next(); }
});

router.use('/login', loginRouter);
router.use('/chat', chatRouter);

router.get('/', (req: Request, res: Response) => {
  res.redirect('/login');
});

router.get('/:view', (req: Request, res: Response) => {
  res.render(req.params.view);
});

router.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send(' 찾으시는 페이지가 현재 서버에 없습니다.');
});

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send('서버 내부에서 충돌이 발생하였습니다!');
});

export default router;