import { observable } from 'mobx'

export class Item {
  @observable content: string
  @observable editing: boolean = false

  constructor(content: string) {
    this.content = content
  }
}

interface SupplierData {
  id: number
  name: string
  street: string
  city: string
  country: string
  phone: string
  description: string
}

export class Supplier {
  id: number
  @observable name: Item
  @observable street: Item
  @observable city: Item
  @observable country: Item
  @observable phone: Item
  @observable description: Item

  constructor(data: SupplierData) {
    this.id = data.id
    this.name = new Item(data.name)
    this.street = new Item(data.street)
    this.city = new Item(data.city)
    this.phone = new Item(data.phone)
    this.description = new Item(data.description)
  }
}
