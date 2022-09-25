import * as nodemailer from 'nodemailer'

interface IEmailSenderDTO {
  email: string
  subject: string
  text?: string
  html?: string
  type: string
}

const emailSender = async ({
  email,
  subject,
  text,
  html,
  type,
}: IEmailSenderDTO) => {
  let emailSent = false

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
      user: process.env.EMAIL_AUTH,
      pass: process.env.EMAIL_PASS,
    },
  })

  await transporter
    .sendMail({
      from: `Carteiro Digital <${process.env.EMAIL_AUTH}>`,
      to: email,
      subject,
      text,
      html,
    })
    .then((_) => {
      console.log(`${type} email sent to ${email} via nodemailer`)
      emailSent = true
    })
    .catch((error: any) => console.log(error))

  if (!emailSent) {
    console.log(`Error sending ${type.toLowerCase()} email via nodemailer.`)
    if (type === 'Contact') console.log(text)
  }
}
export { emailSender }
