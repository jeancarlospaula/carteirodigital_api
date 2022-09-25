import { Request, Response } from 'express'
import { ITrackController } from '../interfaces/controllers/ITrackController'
import { fillOrderEvents } from '../lib/fillOrderEvents'
import { TrackedOrdersNumberRepository } from '../repositories'
import { tracking } from '../services/correios/tracking'

const trackedOrdersNumber = new TrackedOrdersNumberRepository()

class TrackController implements ITrackController {
  async getTrackData(req: Request, res: Response): Promise<Response> {
    const { id: trackingCode } = req.params
    console.log('Tracking order: ', trackingCode)

    const [trackingData] = await tracking([trackingCode])
    console.log('Tracking data: ', JSON.stringify(trackingData, null, 2))

    if (!trackingData.sucesso || !trackingData.eventos?.length) {
      return res.status(400).json({
        error: {
          message:
            'Código inválido ou ainda não disponível na base de dados dos Correios do Brasil.',
          code: trackingCode,
        },
      })
    }

    const delivered = trackingData.entregue ? true : false

    const trackingEvents = fillOrderEvents({
      events: trackingData.eventos,
      delivered,
    })

    return res.status(200).json({
      code: trackingCode,
      packageType: trackingData.type || 'Não identificado',
      delivered,
      events: trackingEvents,
    })
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
