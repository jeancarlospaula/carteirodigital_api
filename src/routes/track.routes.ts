import cors from 'cors'
import { Router } from 'express'
import { TrackController } from '../controllers'

const trackRoutes = Router()
const trackController = new TrackController()

trackRoutes.get('/order/:id', trackController.getTrackData)
trackRoutes.get(
  '/ordersNumber',
  cors({ origin: process.env.CLIENT_URL?.split(',') }),
  trackController.getTrackedOrdersNumber
)

export { trackRoutes }
