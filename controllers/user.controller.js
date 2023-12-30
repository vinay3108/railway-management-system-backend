import User from '../models/users.model.js';
import { catchAsyncErrors } from '../middlewares/catchError.js';
import { successMessage ,failureMessage} from '../utils/httpResponses.js';

export const createUser = catchAsyncErrors(async (req,res) =>{
    try{
        const {name,email,mobile,password,dob} = req.body;
        const user = await User.create({name,email,mobile,password,dob});
        res.send(successMessage(user));
    }catch(err){
        res.status(400).json({ message: err.message, errors: err.errors });
    }
});

export const getUser = catchAsyncErrors(async (req,res) =>{
    const {email }  = req.body;
    const user = await User.findOne({email: email});
    res.send(successMessage(user));
});