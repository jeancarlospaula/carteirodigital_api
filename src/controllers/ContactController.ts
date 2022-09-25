import { Request, Response } from 'express'
import { IContactController } from '../interfaces/controllers/IContactController'
import { emailSender } from '../services/email/emailSender'
import * as contact from '../templates/email/contact'

class ContactController implements IContactController {
  async sendContactEmail(req: Request, res: Response): Promise<Response> {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    try {
      await emailSender({
        email: process.env.EMAIL_AUTH as string,
        subject: `Contato de ${name}!`,
        text: contact.messageText(name, email, message),
        html: contact.messageHTML(name, email, message),
        type: 'Contact',
      })

      await emailSender({
        email,
        subject: `Recebemos seu contato, ${name}!`,
        text: contact.replyMessageText(name, message),
        html: contact.replyMessageHTML(name, message),
        type: 'Reply',
      })

      return res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: 'Error sending email' })
    }
  }
}

export { ContactController }
