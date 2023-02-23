import { RequestHandler } from "express";
import customer from "../models/customer";
import order from "../models/order";
import product from "../models/product";

/**
 * Add order
 * @param object req to Add order.
 * @return object as success or failure.
 **/
export const createOrder: RequestHandler = async (req, res, next) => {
  const orderData = {
    unitPrice: req.body.unitPrice,
    unitQty: req.body.unitQty,
    totalamount: req.body.totalamount,
    discount: req.body.discount,
    finalamount: req.body.finalamount,
    productId: req.body.productId,
    customerId: req.body.customerId,
  };
  var orderRes = await order.create(orderData);
  return res
    .status(200)
    .json({ message: "Order created successfully", data: orderRes });
};

/**
 * Get Order List
 * @return object as success or failure.
 **/
export const getAllOrder: RequestHandler = async (req, res, next) => {
  const orders: order[] = await order.findAll({
    include: [
      {
        model: customer,
        attributes: ["id", "name", "city"],
      },
      {
        model: product,
        attributes: ["name"],
      },
    ],
  });
  return res
    .status(200)
    .json({ message: "Orders fetched successfully", data: orders });
};

/**
 * Update Order
 * @param object req to update order.
 * @return object as success or failure.
 **/
export const updateOrder: RequestHandler = async (req, res, next) => {
  const orderData = {
    unitPrice: req.body.unitPrice,
    unitQty: req.body.unitQty,
    totalamount: req.body.totalamount,
    discount: req.body.discount,
    finalamount: req.body.finalamount,
    productId: req.body.productId,
    customerId: req.body.customerId,
  };
  const orderId = req.body.id;
  await order.update(orderData, {
    where: {
      id: orderId,
    },
  });
  const updatedOrder: order | null = await order.findByPk(orderId);
  return res
    .status(200)
    .json({ message: "Order updated successfully", data: updatedOrder });
};
