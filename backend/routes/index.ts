import { Router } from 'express'
import userRoutes from './user';
import roleRoutes from './role';
import categoriesRoutes from './categories';
import productRoutes from './product';


const router = Router()

router.use('/user',userRoutes);
router.use('/role',roleRoutes);
router.use('/category',categoriesRoutes);
router.use('/product',productRoutes);

export default router