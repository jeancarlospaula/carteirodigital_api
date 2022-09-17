import express, { Router } from 'express'
import { contactRoutes } from './contact.routes'
import { trackRoutes } from './track.routes'

const routes = Router()

routes.use(express.json())

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'API active' })
})

routes.use('/track', trackRoutes)
routes.use('/contact', contactRoutes)

export { routes }
