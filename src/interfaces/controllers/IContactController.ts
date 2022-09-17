import { Request, Response } from 'express'

export interface IContactController {
  sendContactEmail: (req: Request, res: Response) => Promise<Response>
}
