import { Router } from "express";
import {
  getAllUsers,
  signIn,
  signUp,
  updateUser,
  deleteUser,
} from "../controllers/user";

const router = Router();

router.post("/signUp", signUp);
router.get("/getUsers", getAllUsers);
router.post("/signIn", signIn);
router.post("/updateUser", updateUser);
router.post("/deleteUser", deleteUser);

export default router;
