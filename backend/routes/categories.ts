import { Router } from "express";
import {
    createCategory,
    getAllCategory,
    updateCategory,
    deleteCategory
} from "../controllers/categories";
import { VerifyToken } from "../helpers/authJwt";

const router = Router();
router.post("/addCategory",VerifyToken, createCategory);
router.get("/getCategories",VerifyToken, getAllCategory);
router.post("/updateCategory",VerifyToken, updateCategory);
router.post("/deleteCategory",VerifyToken, deleteCategory);

export default router;
