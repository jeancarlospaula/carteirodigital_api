import { IEventAddress } from '../interfaces/ITrackEvents'

const getEventAddressData = (address: string = ''): IEventAddress => {
  const addressType = address?.match(/(.*)-/)?.[1]?.trim()

  return {
    type: addressType === 'País' ? 'Internacional' : addressType || undefined,
    city: address?.match(/\-([^)]+)\//)?.[1]?.trim() || undefined,
    state: address?.match(/\/(.*)/)?.[1]?.trim() || undefined,
  }
}

export { getEventAddressData }
