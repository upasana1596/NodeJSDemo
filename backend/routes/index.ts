import { Router } from 'express'
import userRoutes from './user';
import roleRoutes from './role';
const router = Router()

router.use('/user',userRoutes);
router.use('/role',roleRoutes);

export default router