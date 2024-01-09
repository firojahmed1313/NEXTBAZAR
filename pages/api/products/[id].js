import dbConnect from '@/backend/config/dbConnect'
//import { createRouter } from 'next-connect';
/*
const router = createRouter();
dbConnect();
router.get(getproductdetails);
console.log("4")
//router.get(deleteproduct);
console.log("d2")
export default router.handler();*/
import Product from "../../../backend/models/product"




export default async (req,res,next)=>{
    switch (req.method) {
        case "GET":
            await getproductdetails(req,res);
            break;
    
        case "DELETE":
            await deleteproduct(req,res);
            break;
    
        default:
            break;
    }
}

const getproductdetails = async (req,res,next)=>{
    const productd = await Product.findById(req.query.id);
    console.log("getproductdetails")
    //console.log("productd",productd)
    if(!productd){
        res.status(404).json({
            error: "Product not found."
        });
    }
    res.status(200).json({
        productd,
    });
}


const deleteproduct = async (req,res,next)=>{
    try{
        await Product.findByIdAndDelete({_id : req.query.id});
    console.log("deleteproduct")

    res.status(200).json({
        
    });
    }
    catch(e){
        console.log("error")
    }
    
}