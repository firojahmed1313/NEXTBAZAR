import Product from "../models/product"
//import APIfilters from '../utils/APIfilters'

export const newproduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    console.log("newproduct")
    res.status(201).json({
        product,
    });
}

export const getproduct = async (req, res, next) => {


    const products = await Product.find().maxTimeMS(20000);
    //console.log(products);
    res.status(200).json({
        products,
    });
}

export const getproductdetails = async (req, res, next) => {
    const productd = await Product.findById(req.query.id);
    console.log("getproductdetails")
    //console.log("productd",productd)
    if (!productd) {
        res.status(404).json({
            error: "Product not found."
        });
    }
    res.status(200).json({
        productd,
    });
}


export const deleteproduct = async (req, res, next) => {
    try {
        await Product.findByIdAndDelete({ _id: req.query.id });
        console.log("deleteproduct")

        res.status(200).json({

        });
    }
    catch (e) {
        console.log("error")
    }

}
