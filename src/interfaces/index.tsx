import { observable } from 'mobx'

export class Item {
  @observable content: string
  @observable editing: boolean = false

  constructor(content: string) {
    this.content = content
  }
}

export interface SupplierData {
  id: number
  name: string
  street: string
  city: string
  country: string
  phone?: string
  email?: string
  website?: string
  description: string
  images: string[]
}

export class Supplier {
  id: number
  @observable name: Item
  @observable description: Item
  @observable address: Item
  @observable country: Item
  @observable phone?: Item
  @observable email?: Item
  @observable website?: Item
  images: string[]

  constructor(data: SupplierData) {
    const address = `${data.street}, ${data.city}`
    this.id = data.id
    this.name = new Item(data.name)
    this.address = new Item(address)
    this.country = new Item(data.country)
    this.phone = new Item(data.phone)
    this.email = new Item(data.email)
    this.website = new Item(data.website)
    this.description = new Item(data.description)
    this.images = data.images
  }
}
