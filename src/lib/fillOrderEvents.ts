import { RastreioEvent } from 'rastreio-correios/dist/interfaces/rastreio'
import { IOrderEvents } from '../interfaces/ITrackEvents'
import { getEventAddressData } from './getEventAddressData'

interface IFillOrderEvents {
  events: RastreioEvent[]
  delivered: boolean
}

const fillOrderEvents = ({
  events,
  delivered,
}: IFillOrderEvents): IOrderEvents[] => {
  const orderEvents = events.map((event, index) => ({
    status: event.status,
    dateUpdate: event.data,
    timeUpdate: event.hora,
    location: getEventAddressData(event.local),
    destination:
      delivered && index === events.length - 1
        ? undefined
        : getEventAddressData(event.destino || event.local),
  }))

  return orderEvents
}

export { fillOrderEvents }
