import { Router } from "express";
import {
    createCustomer,
    getAllCustomer,
    updateCustomer,
    deleteCustomer
} from "../controllers/customer";
import { VerifyToken } from "../helpers/authJwt";

const router = Router();
router.post("/addCustomer",VerifyToken, createCustomer);
router.get("/getCustomers",VerifyToken, getAllCustomer); //implemented jwt authentication
router.post("/updateCustomer",VerifyToken, updateCustomer);
router.post("/deleteCustomer",VerifyToken, deleteCustomer);

export default router;
