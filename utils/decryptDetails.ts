const crypto = require("crypto");

export default function decryptDetails(encryptedMessage:string) {
  const secretKey = process.env.SECRET_KEY;
  const secretIv = process.env.SECRET_IV;
  const encryptionMethod = process.env.ENCRYPTION_METHOD;
  const key = crypto
    .createHash("sha512")
    .update(secretKey, "utf-8")
    .digest("hex")
    .substr(0, 32);
  const iv = crypto
    .createHash("sha512")
    .update(secretIv, "utf-8")
    .digest("hex")
    .substr(0, 16);

  const buff = Buffer.from(encryptedMessage, "base64");
  encryptedMessage = buff.toString("utf-8");
  const decryptor = crypto.createDecipheriv(encryptionMethod, key, iv);
  return (
    decryptor.update(encryptedMessage, "base64", "utf8") +
    decryptor.final("utf8")
  );
}
