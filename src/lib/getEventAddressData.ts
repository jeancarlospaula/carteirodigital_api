import { IEventAddress } from '../interfaces/ITrackEvents'

const getEventAddressData = (address: string = ''): IEventAddress => {
  return {
    type: address?.match(/(.*)-/)?.[1]?.trim() || undefined,
    city: address?.match(/\-([^)]+)\//)?.[1]?.trim() || undefined,
    state: address?.match(/\/(.*)/)?.[1]?.trim() || undefined,
  }
}

export { getEventAddressData }
