import { Router } from "express";
import {
    createOrder,
    getAllOrder,
    updateOrder,
} from "../controllers/order";
import { VerifyToken } from "../helpers/authJwt";

const router = Router();
router.post("/addOrder",VerifyToken, createOrder);
router.get("/getOrders",VerifyToken, getAllOrder);
router.post("/updateOrder",VerifyToken, updateOrder);

export default router;
