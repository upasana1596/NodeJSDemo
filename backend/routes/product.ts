import { Router } from "express";
import {
    createProduct,
    getAllProduct,
    updateProduct,
    deleteProduct
} from "../controllers/product";

const router = Router();
router.post("/addProduct", createProduct);
router.get("/getProducts", getAllProduct);
router.post("/updateProduct", updateProduct);
router.post("/deleteProduct", deleteProduct);

export default router;
