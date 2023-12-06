import { makeAutoObservable } from "mobx"

class Store {
    constructor() {
        makeAutoObservable(this)
    }

    email = ''
    setEmail = (email) => {
        this.email = email
    }
}

const SharedState = new Store()

export default SharedState