import { Request, Response } from 'express'

export interface ITrackController {
  getTrackData: (req: Request, res: Response) => Promise<Response>
  getTrackedOrdersNumber: (req: Request, res: Response) => Promise<Response>
}
