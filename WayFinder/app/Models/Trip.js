import { generateId } from "../Utils/generateId.js";



export class Trip{
    constructor({id= generateId(), type, name, confirmation, address, date, notes, cost}){
        this.id = id
        this.type = type
        this.name = name
        this.confirmation = confirmation
        this.address = address
        this.date = date
        this.notes = notes
        this.cost = cost
    }
    
    get TripTemplate(){
    return /*html*/`
    <div class="card bg-primary">
    <div class="row">
      <div class="col d-flex mx-5 justify-content-between fs-5 ">
    
        <p>☠️</p>
        <p>${this.name}</p>
        <p>${this.confirmation}</p>
        <p>${this.address}</p>
        <p>${this.date}</p>
        <p>${this.notes}</p>
        <p>$${this.cost}</p>
    
    
      </div>
    </div>
    
    </div>
    
    `
}

}