import {
  ITrackedOrdersNumber,
  TrackedOrdersNumber,
} from '../../models/trackedOrdersNumber'
import { ITrackedOrdersNumberRepository } from '../ITrackedOrdersNumberRepository'

class TrackedOrdersNumberRepository implements ITrackedOrdersNumberRepository {
  async findOne(): Promise<ITrackedOrdersNumber | null> {
    const trackedOrdersNumber = await TrackedOrdersNumber.findOne(
      {},
      '-_id trackedOrdersNumber'
    )
    return trackedOrdersNumber
  }
}

export { TrackedOrdersNumberRepository }
