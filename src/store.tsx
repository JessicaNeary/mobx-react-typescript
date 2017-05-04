import { observable } from 'mobx'
import { Item, Supplier } from './interfaces'

const dumbyData = [
  {
    id: 10001,
    name: 'Heritage Hotel',
    street: '90 FEDERAL STREET',
    city: 'Auckland',
    country: 'New Zealand',
    phone: '09-000-0000',
    description: 'An upscale hotel'
  }
]

export class AppState {
    data: Supplier = new Supplier(dumbyData[0])
}
