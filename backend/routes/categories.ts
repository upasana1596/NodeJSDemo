import { Router } from "express";
import {
    createCategory,
    getAllCategory,
    updateCategory,
    deleteCategory
} from "../controllers/categories";

const router = Router();
router.post("/addCategory", createCategory);
router.get("/getCategories", getAllCategory);
router.post("/updateCategory", updateCategory);
router.post("/deleteCategory", deleteCategory);

export default router;
