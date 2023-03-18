const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface User{
    name:string,
    email:string
}


export class Email {
    name:string;
    to:string;
    fromEmail = "mark@infarena.ca";
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
      templateId: "d-b6bc731d7c734117b2aa58745bd6fdb8",
      dynamic_template_data: {
        name: this.name,
        senderMail: this.fromEmail,
      },
    };

    await sgMail.send(mailOptions).then(() => {}, console.error);
  }
};


