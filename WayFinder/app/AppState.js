import { Trip } from "./Models/Trip.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Trip').Trip[]} */
  trips = [
    new Trip({
      type: "",
      name: "Los-Angeles",
      confirmation: 8987987,
      address: "123 bungus drive",
      date: "12/30/22",
      notes: "",
      cost: 100
    }),
    new Trip({
      type: "",
      name: "JKL;JIJO;IO",
      confirmation: 8987987,
      address: "123 bungus drive",
      date: "12/30/22",
      notes: "",
      cost: 100
    })
  ]
  



}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
