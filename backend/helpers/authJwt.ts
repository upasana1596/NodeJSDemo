import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
require('dotenv').config();

let userId = 0;
let roleId = 0;
export const VerifyToken: RequestHandler = async (req, res, next) => {
    const token = req.header('Authorization').split('Bearer ');
    const bearerToken = token[1];
    if(!bearerToken){
        return res.status(401).send({message : "No token provided"});
    }
    try {
        const verified = jwt.verify(bearerToken,process.env.SECRET_KEY);
        userId = verified.id;
        roleId = verified.roleId;
        return next();
    }catch{
        res.status(400).send({message:"Invalid token"})
    }
};

export const getUserIdandRoleId = async function(){
    const data = {userid : userId,roleid:roleId}
    return data;
}