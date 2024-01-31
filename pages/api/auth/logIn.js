import dbConnect from "@/backend/config/dbConnect";
import { loginUser } from "@/backend/controllers/userControllers";
import { createRouter } from "next-connect";


const router = createRouter();

dbConnect();

router.post(loginUser);

export default router.handler();