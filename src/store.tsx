import { observable } from 'mobx'

export default class AppState {
    @observable timer: number = 0;
    text: string = 'A very thing'

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    resetTimer() {
        this.timer = 0;
    }
}
