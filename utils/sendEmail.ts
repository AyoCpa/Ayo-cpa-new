const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface User{
    name:string,
    email:string
}


export class Email {
    name:string;
    to:string;
    fromEmail = "mark@ayocpa.ca";
    fromName="Ayocpa";

  constructor(user:User) {
    (this.name = user.name), (this.to = user.email);
  }

  async sendMagicLink(): Promise<void> {
    const mailOptions = {
      to: this.to,
      from: {
        email: this.fromEmail,
        name: this.fromName,
      },
      templateId: "d-bd2656743d3d4787bc0fa9f319f73eda",
      dynamic_template_data: {
        name: this.name,
        senderMail: this.fromEmail,
      },
    };

    await sgMail.send(mailOptions).then(() => {}, console.error);
  }
};


