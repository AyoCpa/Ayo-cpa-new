import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import ValidateEmail from "@/utils/email-validate";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { email_address, phone_number, address , name } = req.body;

    // Do Validation 
    const errors = []

    if(!email_address){
      errors.push("email_address is required")
    }
    else{
      if(!ValidateEmail(email_address)){
        errors.push("invalid email format")
      }
    }

    if(!phone_number){
      errors.push("Phone number is required")
    }
    
    if(!address){
      errors.push("Address is required")
    }

    if(!name){
      errors.push("name is required")
    }


    if(errors.length){
      return res.status(400).json({msg:errors})
    }

    // find user first
    let isUser;
    try {
      isUser = await findUser(email_address);
    } catch (error) {
      console.log("error_trying_to_find_ user" , error)
      return res.status(500).json({msg: "Database could not fetch data"})
      // return something when it's not possible to fetch a data due to database issue
    }


    if (!isUser) {
      let user_data;
      try {
        user_data = await prisma.user.create({
          data: { email_address, phone_number, address, name},
        });
        return res.status(201).json(user_data);
      } catch (e) {
        console.log("error_in_catch", e);
        return res.status(500).json({msg:"database could not fetch data"})
      }
    }

    // when user exist using email as a unique identifier
    return res.status(409).json({ msg: "user exists" });
  } else {
    return res
      .setHeader("allow", "POST")
      .status(405)
      .json({ msg: "method not allowed" });
  }
}

const findUser = async (email_address: string) => {
  try {
    const userExist = await prisma.user.findFirst({
      where: { email_address: email_address },
    });

    if (userExist) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    throw new Error("Error Finding data");
  }
};


