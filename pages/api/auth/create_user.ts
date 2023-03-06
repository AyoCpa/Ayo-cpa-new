import { Console } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { email_address, phone_number, address } = req.body;
    try {
      const user = await prisma.user.create({
        data: { email_address, phone_number, address },
      });
      console.log(user);
      console.log(user)
      console.log(user)
    } catch (e) {
      console.log("error_in_catch", e);
    }

    return res.status(201).json({ msg: "data save successfully" });
  } else {
    return res
      .setHeader("allow", "POST")
      .status(405)
      .json({ msg: "method not allowed" });
  }
}
