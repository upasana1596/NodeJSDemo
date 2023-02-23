import { Router } from "express";
import {
    createOrder,
    getAllOrder,
    updateOrder,
} from "../controllers/order";

const router = Router();
router.post("/addOrder", createOrder);
router.get("/getOrders", getAllOrder);
router.post("/updateOrder", updateOrder);

export default router;
