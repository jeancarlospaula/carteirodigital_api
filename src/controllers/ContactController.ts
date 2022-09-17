import { Request, Response } from 'express'
import { IContactController } from '../interfaces/controllers/IContactController'

class ContactController implements IContactController {
  async sendContactEmail(req: Request, res: Response): Promise<Response> {
    return res.status(400)
  }
}

export { ContactController }
