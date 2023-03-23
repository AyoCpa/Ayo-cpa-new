const crypto = require("crypto");

export default function handleEncrypt(val:string) {
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

  const encryptor = crypto.createCipheriv(encryptionMethod, key, iv);
  const aes_encrypted =
    encryptor.update(val, "utf8", "base64") + encryptor.final("base64");
  return Buffer.from(aes_encrypted).toString("base64");
}
