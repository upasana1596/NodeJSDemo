import { RequestHandler } from "express";
import product from "../models/product";
import deleteRecordStatus from "../helpers/constant";
import category from "../models/categories";

/**
 * Add Product
 * @param object req to Add product.
 * @return object as success or failure.
 **/
export const createProduct: RequestHandler = async (req, res, next) => {
  const productData = {
    name: req.body.name,
    description: req.body.description,
    categoryId: req.body.categoryId,
  };
  var productRes = await product.create(productData);
  return res
    .status(200)
    .json({ message: "Product created successfully", data: productRes });
};

/**
 * Get Product List
 * @return object as success or failure.
 **/
export const getAllProduct: RequestHandler = async (req, res, next) => {
  const products: product[] = await product.findAll({
    include:[{
      model:category,
      attributes:["id","name"]
    }]
  });
  
  return res
    .status(200)
    .json({ message: "Product fetched successfully", data: products });
};

/**
 * Update Product
 * @param object req to update product.
 * @return object as success or failure.
 **/
export const updateProduct: RequestHandler = async (req, res, next) => {
  const productData = {
    name: req.body.name,
    description: req.body.description,
    categoryId: req.body.categoryId,
  };
  const productId = req.body.id;
  await product.update(productData, {
    where: {
      id: productId,
    },
  });
  const updatedProduct: product | null = await product.findByPk(productId);
  return res
    .status(200)
    .json({ message: "Product updated successfully", data: updatedProduct });
};

/**
 * Delete Product
 * @param object req to delete product.
 * @return object as success or failure.
 **/
export const deleteProduct: RequestHandler = async (req, res, next) => {
  var productRes = await product.update(
    { recordStatus: deleteRecordStatus.deleteRecordStatus },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  return res
    .status(200)
    .json({ message: "Product deleted successfully", data: productRes });
};
