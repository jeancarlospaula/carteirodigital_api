interface IEventAddress {
  type?: string
  city?: string
  state?: string
}

interface IOrderEvents {
  status: string
  dateUpdate: string
  timeUpdate: string
  location: IEventAddress
  destination: IEventAddress
}

export interface IOrderData {
  trackingCode: string
  events: IOrderEvents[]
  delivered: boolean
  packageType: string
}
