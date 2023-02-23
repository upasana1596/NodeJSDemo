import { Router } from "express";
import {
    createProduct,
    getAllProduct,
    updateProduct,
    deleteProduct
} from "../controllers/product";
import { VerifyToken } from "../helpers/authJwt";

const router = Router();
router.post("/addProduct",VerifyToken, createProduct);
router.get("/getProducts", getAllProduct);
router.post("/updateProduct",VerifyToken, updateProduct);
router.post("/deleteProduct",VerifyToken, deleteProduct);

export default router;
