import jwt from "jsonwebtoken"




export const createCookie = (user, res, massage) => {
    const token = jwt.sign({ id: user._id }, process.env.JWT_ST, {
        expiresIn: "1d",
    });
    console.log(token);
    res
        .status(201)
        .json({
            success: true,
            massage,
            user,
            token,
        });
}