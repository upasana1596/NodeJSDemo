import { RequestHandler } from "express";
import category from "../models/categories";
import deleteRecordStatus from "../helpers/constant";

/**
 * Add Categories
 * @param object req to Add categories.
 * @return object as success or failure.
 **/
export const createCategory: RequestHandler = async (req, res, next) => {
  var categoryRes = await category.create({name:req.body.name});
  return res
    .status(200)
    .json({ message: "Category created successfully", data: categoryRes });
};

/**
 * Get Category List
 * @return object as success or failure.
 **/
export const getAllCategory: RequestHandler = async (req, res, next) => {
  const categories: category[] = await category.findAll();
  return res
    .status(200)
    .json({ message: "Categories fetched successfully", data: categories });
};

/**
 * Update Category
 * @param object req to update category.
 * @return object as success or failure.
 **/
export const updateCategory: RequestHandler = async (req, res, next) => {
  const userData = {
    name: req.body.name,
    recordStatus: req.body.recordstatus,
  };
  const categoryId = req.body.id;
  await category.update(userData, {
    where: {
      id: categoryId,
    },
  });
  const updatedCategory: category | null = await category.findByPk(categoryId);
  return res
    .status(200)
    .json({ message: "Category updated successfully", data: updatedCategory });
};

/**
 * Delete Category
 * @param object req to delete category.
 * @return object as success or failure.
 **/
export const deleteCategory: RequestHandler = async (req, res, next) => {
  var categoryRes = await category.update(
    { recordStatus: deleteRecordStatus.deleteRecordStatus },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  return res
    .status(200)
    .json({ message: "Category deleted successfully", data: categoryRes });
};
