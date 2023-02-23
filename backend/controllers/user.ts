import { RequestHandler } from "express";
import user from "../models/user";
var bcrypt = require("bcryptjs");
import userRole from "../helpers/constant";
import deleteRecordStatus from "../helpers/constant";
import jwt from 'jsonwebtoken';

/**
 * User SignUp
 * @param object req to Add user.
 * @return object as success or failure.
 **/
export const signUp: RequestHandler = async (req, res, next) => {
  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    roleId: userRole.userRole,
  };
  var userRes = await user.create(userData);
  return res
    .status(200)
    .json({ message: "User created successfully", data: userRes });
};

/**
 * User SignIn
 * @param object req to Signin user.
 * @return object as success or failure.
 **/
export const signIn: RequestHandler = async (req, res, next) => {
  var userData = await user.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (!userData) {
    return res.status(404).json({ message: "User not found" });
  } else {
    var passwordIsValid = bcrypt.compareSync(req.body.password, userData.password);
    if (!passwordIsValid) {
      return res.status(404).json({ message: "Invalid password" });
    }
    var token = jwt.sign(
      {
        id: userData.id,
        roleId: userData.roleId,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    var userRes = {
      userId: userData.id,
      email: userData.email,
      roleId: userData.roleId,
      token:token
    };
    return res
      .status(200)
      .json({ message: "User Logged In successfully", data: userRes });
  }
};

/**
 * Get User List
 * @return object as success or failure.
 **/
export const getAllUsers: RequestHandler = async (req, res, next) => {
  const users: user[] = await user.findAll();
  return res
    .status(200)
    .json({ message: "Users fetched successfully", data: users });
};

/**
 * Update User
 * @param object req to update user.
 * @return object as success or failure.
 **/
export const updateUser: RequestHandler = async (req, res, next) => {
  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    recordStatus: req.body.recordstatus,
  };
  const userId = req.body.id;
  await user.update(userData, {
    where: {
      id: userId,
    },
  });
  const updatedUser: user | null = await user.findByPk(userId);
  return res
    .status(200)
    .json({ message: "User updated successfully", data: updatedUser });
};

/**
 * Delete User
 * @param object req to delete user.
 * @return object as success or failure.
 **/
export const deleteUser: RequestHandler = async (req, res, next) => {
  var userRes = await user.update(
    { recordStatus: deleteRecordStatus.deleteRecordStatus },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  return res
    .status(200)
    .json({ message: "User deleted successfully", data: userRes });
};
