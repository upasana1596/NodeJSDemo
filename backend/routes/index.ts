import { Router } from 'express'
import userRoutes from './user';
import roleRoutes from './role';
import categoriesRoutes from './categories';
import productRoutes from './product';
import customerRoutes from './customer';
import orderRoutes from './order';

const router = Router()

router.use('/user',userRoutes);
router.use('/role',roleRoutes);
router.use('/category',categoriesRoutes);
router.use('/product',productRoutes);
router.use('/customer',customerRoutes);
router.use('/order',orderRoutes);

export default router