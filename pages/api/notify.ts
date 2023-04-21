import { UploadEmail } from "@/utils/uploadEmail";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await new UploadEmail(req.body).sendMagicLink();
    return res.status(200).send({ msg: "sent successfully" });
  } catch (e) {
    return res.status(500).send({ msg: "could not send message" });
  }
}
