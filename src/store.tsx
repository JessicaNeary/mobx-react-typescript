import { observable } from 'mobx'
import { Item, Supplier, Service } from './interfaces'

const dummyService = {
  id: 50001,
  name: 'Grand Presidential Suite',
  text: 'Light and spaceous room',
  supplierId: 10001,
  image: 'http://placehold.it/150x150'
}

const dummySupplier =
  {
    id: 10001,
    name: 'Heritage Hotel',
    street: '90 FEDERAL STREET',
    city: 'Auckland',
    country: 'New Zealand',
    phone: '09-000-0000',
    email: 'info@heritage.com',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate dignissim blandit. Proin in pellentesque nisl. Suspendisse fringilla nibh et mauris rutrum, sit amet rutrum tellus vehicula. Mauris a accumsan mauris. Vestibulum fermentum, odio nec luctus tempor, felis nisl ornare nisl, eget feugiat justo purus vitae mi.',
    images: [
      'http://placehold.it/150x150', 'http://placehold.it/150x150', 'http://placehold.it/150x150'
    ],
    services: [
      new Service(dummyService)
    ]
  }

export class AppState {
    data: Supplier = new Supplier(dummySupplier)
}
