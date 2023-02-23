import { Router } from "express";
import {
  getAllUsers,
  signIn,
  signUp,
  updateUser,
  deleteUser,
} from "../controllers/user";
import { VerifyToken } from "../helpers/authJwt";

const router = Router();

router.post("/signUp", signUp);
router.get("/getUsers",VerifyToken, getAllUsers);
router.post("/signIn", signIn);
router.post("/updateUser",VerifyToken, updateUser);
router.post("/deleteUser",VerifyToken, deleteUser);

export default router;
