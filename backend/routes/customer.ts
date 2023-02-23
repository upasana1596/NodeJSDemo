import { Router } from "express";
import {
    createCustomer,
    getAllCustomer,
    updateCustomer,
    deleteCustomer
} from "../controllers/customer";

const router = Router();
router.post("/addCustomer", createCustomer);
router.get("/getCustomers", getAllCustomer);
router.post("/updateCustomer", updateCustomer);
router.post("/deleteCustomer", deleteCustomer);

export default router;
