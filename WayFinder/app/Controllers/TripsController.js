import { ProxyState } from "../AppState";


function _drawTrips() {
    let trips = ProxyState.trips
    let tripsTemplate = ''
    trips.forEach(trip => tripsTemplate += trip.TripTemplate)
    document.getElementById("trips").innerHTML = /*html*/ `
    
    
    
    
    
    `

}
export class TripsController {
    constructor(){
        ProxyState.on("trips", _drawTrips())
    }
}