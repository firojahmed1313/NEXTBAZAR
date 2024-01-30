import dbConnect from "@/backend/config/dbConnect";
import {  registerUser } from "@/backend/controllers/userControllers";
import { createRouter }  from "next-connect";

const router = createRouter();


dbConnect();

router.post(registerUser);

export default router.handler();