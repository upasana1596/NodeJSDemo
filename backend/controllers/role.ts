import { RequestHandler } from "express";
import role from "../models/role";
import deleteRecordStatus from "../helpers/constant";
import activeRecordStatus from "../helpers/constant";

/**
 * Add User Role
 * @param object req to Add user role.
 * @return object as success or failure.
 **/
export const createRole: RequestHandler = async (req, res, next) => {
  const roleData = {
    name: req.body.name,
    recordStatus:activeRecordStatus.activeRecordStatus,
  };
  var roleRes = await role.create(roleData);
  return res
    .status(200)
    .json({ message: "Role created successfully", data: roleRes });
};


/**
 * Get Role List
 * @return object as success or failure.
 **/
export const getAllRoles: RequestHandler = async (req, res, next) => {
  const roles: role[] = await role.findAll();
  return res
    .status(200)
    .json({ message: "Roles fetched successfully", data: roles });
};

/**
 * Update Role
 * @param object req to update role.
 * @return object as success or failure.
 **/
export const updateRole: RequestHandler = async (req, res, next) => {
  const roleId  = req.body.id;
  const userData = {
    name:req.body.name,
    recordStatus: req.body.recordstatus,
  };
  await role.update(userData, {
    where: {
      id: roleId,
    },
  });
  const updatedRoles: role | null = await role.findByPk(roleId);
  return res
    .status(200)
    .json({ message: "Roles updated successfully", data: updatedRoles });
};

/**
 * Delete Role
 * @param object req to delete role.
 * @return object as success or failure.
 **/
export const deleteRole: RequestHandler = async (req, res, next) => {
  var roleRes = await role.update(
    { recordStatus: deleteRecordStatus.deleteRecordStatus },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  return res
    .status(200)
    .json({ message: "Role deleted successfully", data: roleRes });
};