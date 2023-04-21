import { UploadEmail } from "@/utils/uploadEmail";
import { NextApiRequest , NextApiResponse } from "next";

export default async function handler (req:NextApiRequest , res: NextApiResponse) {
    
    try{
        await new UploadEmail(req.body).sendMagicLink()
    }catch(e){
        return res.status(500)
    }
}