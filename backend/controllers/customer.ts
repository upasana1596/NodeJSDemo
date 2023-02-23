import { RequestHandler } from "express";
import customer from "../models/customer";
import deleteRecordStatus from "../helpers/constant";

/**
 * Add Customer
 * @param object req to Add customer.
 * @return object as success or failure.
 **/
export const createCustomer: RequestHandler = async (req, res, next) => {
    const customerData = {
        name: req.body.name,
        mobileNo: req.body.mobileNo,
        city: req.body.city,
        address: req.body.address,
        pincode: req.body.pincode,
    };
    try{
        var customerRes = await customer.create(customerData);
    return res
        .status(200)
        .json({ message: "Customer created successfully", data: customerRes });
    }catch(err){
        console.log(err)
    }

};

/**
 * Get Customer List
 * @return object as success or failure.
 **/
export const getAllCustomer: RequestHandler = async (req, res, next) => {
    const customers: customer[] = await customer.findAll();
    return res
        .status(200)
        .json({ message: "Customer fetched successfully", data: customers });
};

/**
 * Update Customer
 * @param object req to update customer.
 * @return object as success or failure.
 **/
export const updateCustomer: RequestHandler = async (req, res, next) => {
    const customerData = {
        name: req.body.name,
        mobileNo: req.body.mobileNo,
        city: req.body.city,
        address: req.body.address,
        pincode: req.body.pincode,
    };
    const customerId = req.body.id;
    await customer.update(customerData, {
        where: {
            id: customerId,
        },
    });
    const updatedCustomer: customer | null = await customer.findByPk(customerId);
    return res
        .status(200)
        .json({ message: "Customer updated successfully", data: updatedCustomer });
};

/**
 * Delete Customer
 * @param object req to delete customer.
 * @return object as success or failure.
 **/
export const deleteCustomer: RequestHandler = async (req, res, next) => {
    var customerRes = await customer.update(
        { recordStatus: deleteRecordStatus.deleteRecordStatus },
        {
            where: {
                id: req.body.id,
            },
        }
    );
    return res
        .status(200)
        .json({ message: "Customer deleted successfully", data: customerRes });
};
