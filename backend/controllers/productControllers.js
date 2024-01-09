import Product from "../models/product"
//import APIfilters from '../utils/APIfilters'

export const newproduct = async (req,res,next)=>{
    const product = await Product.create(req.body);
    console.log("newproduct")
    res.status(201).json({
        product,
    });
}

export const getproduct = async (req,res,next)=>{
    
    
    const products = await Product.find().maxTimeMS(20000);
    //console.log(products);
    res.status(200).json({
        products,
    });
}

