import { Router } from "express";
import { createRole, deleteRole, getAllRoles, updateRole } from "../controllers/role";

const router = Router();

router.post("/addRole", createRole);
router.get("/getRoles", getAllRoles);
router.post("/updateRole", updateRole);
router.post("/deleteRole", deleteRole);

export default router;
