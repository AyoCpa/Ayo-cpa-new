import { NextApiRequest, NextApiResponse } from "next";
import { ContactEmail } from "@/utils/contactEmail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, address, comment, phone } = req.body;
  if (!name || !email || !comment || !address || !phone) {
    return res.status(400).json({ msg: "bad request" });
  }
  try {
    await new ContactEmail(req.body).sendMagicLink();
    return res.status(200).send({ msg: "success" });
  } catch (error) {
    return res.status(500).send({ msg: "unexpected error" });
  }
}
