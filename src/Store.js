import { makeAutoObservable } from "mobx"

class Store {
    constructor() {
        makeAutoObservable(this)
    }

    email = ''
    setEmail = (email) => {
        this.email = email
    }

    cart = []
    addCart = (product) => {
        var productExist = false
        this.cart.forEach(element => {
            if (element.id === product.id) {
                productExist = true
                element.quantity += product.quantity
            }
        })

        if (!productExist) {
            this.cart.push(product)
        }
    }
    removeCart = (id) => {
        this.cart = this.cart.filter((product) => product.id !== id)
    }

    addQuantity = (id) => {
        const index = id - 1
        this.cart[index].quantity++
    }
    decQuantity = (id) => {
        this.cart[id - 1].quantity--
    }

    taxes = 0.07

    get total() {
        var total = 0
        this.cart.forEach(product => {
            total += product.quantity * product.price
        })
        total = Math.round(total * 100) / 100

        return total
    }

    clearCart = () => {
        this.cart = []
    }
}

const SharedState = new Store()

export default SharedState