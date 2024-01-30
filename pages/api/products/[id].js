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
import { deleteproduct, getproductdetails } from '@/backend/controllers/productControllers';




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

