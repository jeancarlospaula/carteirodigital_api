import cors from 'cors'
import { Router } from 'express'
import { ContactController } from '../controllers'

const contactRoutes = Router()
const contactController = new ContactController()

contactRoutes.use(cors({ origin: process.env.CLIENT_URL?.split(',') }))

contactRoutes.post('/', contactController.sendContactEmail)

export { contactRoutes }
