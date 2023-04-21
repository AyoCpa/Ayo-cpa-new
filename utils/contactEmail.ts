const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface PayloadProps {
  name: string;
  email: string;
  description: string;
  address: string;
  phone: string;
  comment: string;
}

export class ContactEmail {
  name: string;
  email: string;
  description: string;
  address: string;
  phone: string;
  fromEmail: string;
  fromName: string;
  to: string;
  constructor(payload: PayloadProps) {
    this.name = payload.name;
    this.email = payload.email;
    this.description = payload.comment;
    this.address = payload.address;
    this.phone = payload.phone;
    this.fromEmail = "ayo@ayocpa.ca";
    this.fromName = "ayo-cpa-support";
    this.to = "ayo@ayocpa.ca";
  }

  async sendMagicLink() {
    const mailOptions = {
      to: this.to,
      from: {
        email: this.fromEmail,
        name: this.fromName,
      },
      templateId: "d-5622f6acdda14cd2a5eaeab129432a0e",
      dynamic_template_data: {
        email: this.email,
        name: this.name,
        description: this.description,
        address: this.address,
        phone: this.phone,
      },
    };

    await sgMail.send(mailOptions).then(() => {
      console.log("Sent successfully");
    }, console.error);
  }
}
