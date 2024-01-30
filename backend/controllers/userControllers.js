import { createCookie } from "../config/createCookies";
import User from "../models/user";

export const registerUser = async (req, res, next) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(200).json({
                success: false,
                massage: "Data Insaficient .....",
            });
        }

        let userexist = await User.findOne({ email });
        if (userexist)
            return res.status(200).json({
                success: false,
                massage: "User already exist .....",
            });
        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json({
            user,
            massage: "userRegister sucessfully"
        })
    } catch (error) {
        console.warn(error)
    }

}

export const loginUser = async (req, res, next)=>{
    const { email, password } = req.body;

    let userexist = await User.findOne({ email });
    if (!userexist){

        return res.status(200).json({
            success: false,
            massage: "User does not exist .....",
        });
    }
    else if (password != userexist.password){

        return res.status(400).json({
          success: false,
          massage: "password or email do not match .....",
        });
    }

    createCookie(userexist,res,`wellcome ${userexist.name}`);
}