import cors from 'cors'
import { Router } from 'express'
import { ContactController } from '../controllers'

const contactRoutes = Router()
const contactController = new ContactController()

contactRoutes.get(
  '/',
  cors({ origin: process.env.CLIENT_URL }),
  contactController.sendContactEmail
)

export { contactRoutes }
