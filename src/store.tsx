import { observable } from 'mobx'

export class Item {
  @observable content: string
  @observable editing: boolean = false

  constructor(content: string) {
    this.content = content
  }
}

export class AppState {
    description: Item = new Item('A very thing')
}
