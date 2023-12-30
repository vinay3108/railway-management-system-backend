import { body } from "express-validator";
export const createUserValiation = [
    body('name','Please Enter Name').exists().notEmpty(),
    body('email','Please Enter Valid Email').isEmail().notEmpty(),
    body('mobile','Please Enter Valid Mobile Number').isLength({
        min:10,
        max:10,
    }).notEmpty(),
    body('password','Please Enter PassWord').isLength({
        min: 4,
        max: 8,
    }).notEmpty(),
    body('dob','Please Enter Valid Date Of Birth').notEmpty()
]

export const getUserValidation =[
    body('email','Please Enter Valid Email').isEmail().notEmpty(),
]