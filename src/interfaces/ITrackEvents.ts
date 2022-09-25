export interface IEventAddress {
  type?: string
  city?: string
  state?: string
}

export interface IOrderEvents {
  status: string
  dateUpdate: string
  timeUpdate: string
  location: IEventAddress
  destination: IEventAddress | undefined
}
