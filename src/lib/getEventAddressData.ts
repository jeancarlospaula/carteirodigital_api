import { IEventAddress } from '../interfaces/ITrackEvents'

const getEventAddressData = (address: string = ''): IEventAddress => {
  return {
    type: address?.match(/(.*)-/)?.[1]?.trim(),
    city: address?.match(/\-([^)]+)\//)?.[1]?.trim(),
    state: address?.match(/\/(.*)/)?.[1]?.trim(),
  }
}

export { getEventAddressData }
