import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import ValidateEmail from "@/utils/email-validate";
import handleEncrypt from "@/utils/encryptDetails";
import { Email } from "@/utils/paymentEmail";

const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    return res.status(405);
  }

  let {
    mode,
    email,
    clientName,
    profileName,
    amount,
    cardName,
    cardNumber,
    expiry,
    cvv,
  } = req.body;

  if (!mode) {
    return res.status(400).json({ msg: "Mode of Payment is required" });
  }

  let data = {};

  if (mode === "online_payment") {
    if (
      !email ||
      !ValidateEmail(email) ||
      !clientName ||
      !profileName ||
      !amount ||
      !cardName ||
      !cardNumber ||
      !expiry ||
      !cvv
    ) {
      return res.status(400).json({ msg: "Wrong credentials sent" });
    }
    // Encrypt the card Details here
    cardNumber = handleEncrypt(cardNumber);
    cvv = handleEncrypt(cvv);
    cardName = handleEncrypt(cardName);
    expiry = handleEncrypt(expiry);
    // Build the data to save based on this
    data = {
      clientName,
      email,
      profileName,
      amount,
      mode,
      cardName,
      cardNumber,
      expiry,
      cvv,
    };
  } else {
    if (
      !email ||
      !ValidateEmail(email) ||
      !clientName ||
      !profileName ||
      !amount
    ) {
      return res.status(400).json({ msg: "Wrong credential sent" });
    }
    data = { email, clientName, profileName, amount, mode };
    // build the data to save based on this
  }

  try {
    const payment = await prisma.payment.create({
      data: {
        mode,
        email,
        cardName,
        cardNumber,
        clientName,
        profileName,
        expiry,
        cvv,
        amount,
      },
    });
    try {
      await new Email({
        txnId: payment.id,
        userEmail: payment.email,
      }).sendMagicLink();
    } catch (e) {
      console.log("could not send email");
    }
    return res.status(201).send(payment);
  } catch (error) {
    return res.status(500).send({ msg: "An unexpected error occured" });
  }
}
