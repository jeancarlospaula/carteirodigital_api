import { Request, Response } from 'express'
import { ITrackController } from '../interfaces/controllers/ITrackController'
import { TrackedOrdersNumberRepository } from '../repositories'

const trackedOrdersNumber = new TrackedOrdersNumberRepository()

class TrackController implements ITrackController {
  async getTrackData(req: Request, res: Response): Promise<Response> {
    return res.status(400)
  }

  async getTrackedOrdersNumber(req: Request, res: Response): Promise<Response> {
    try {
      const trackings = await trackedOrdersNumber.findOne()

      return res
        .status(200)
        .json({ trackedOrders: trackings?.trackedOrdersNumber || 0 })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }
}

export { TrackController }
