import { ITrackedOrdersNumber } from '../models/trackedOrdersNumber'

export interface ITrackedOrdersNumberRepository {
  findOne(): Promise<ITrackedOrdersNumber | null>
}
