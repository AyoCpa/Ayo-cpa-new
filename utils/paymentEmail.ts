const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
interface PayloadProps {
  txnId: string;
  userEmail: string;
}
export class Email {
  name: string;
  to: string;
  fromEmail: string;
  fromName: string;
  txnId: string;
  email: string;
  constructor(payload: PayloadProps) {
    this.name = "Mark";
    this.to = "info@ayocpa.ca";
    this.fromEmail = "payment@ayocpa.ca";
    this.fromName = "AyoCpa";
    this.txnId = payload.txnId;
    this.email = payload.userEmail;
  }

  async sendMagicLink() {
    console.log(" got hereee")
    const mailOptions = {
      to: this.to,
      from: {
        email: this.fromEmail,
        name: this.fromName,
      },
      templateId: "d-5b28252d6459464a9fbef945434a311c",
      dynamic_template_data: {
        email: this.email,
        txnId: this.txnId,
      },
    };

    await sgMail.send(mailOptions).then(() => {
      console.log("Sent successfully");
    }, console.error);
  }
}
