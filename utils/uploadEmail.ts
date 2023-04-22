const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
interface PayloadProps {
  description: string;
  fileName: string;
  sender: string;
}
export class UploadEmail {
  name: string;
  to: string;
  fromEmail: string;
  fromName: string;
  description: string;
  fileName: string;
  sender: string;
  constructor(payload: PayloadProps) {
    this.name = "Mark";
    this.to = "info@ayocpa.ca";
    this.fromEmail = "file.submit@ayocpa.ca";
    this.fromName = "AyoCpa";
    this.description = payload.description;
    this.fileName = payload.fileName;
    this.sender = payload.sender;
  }

  async sendMagicLink() {
    const mailOptions = {
      to: this.to,
      from: {
        email: this.fromEmail,
        name: this.fromName,
      },
      templateId: "d-6e379c5f6b3b422684d665e6770acb4b",
      dynamic_template_data: {
        description: this.description,
        fileName: this.fileName,
        sender: this.sender,
      },
    };

    await sgMail.send(mailOptions).then(() => {
      console.log("Sent successfully");
    }, console.error);
  }
};
