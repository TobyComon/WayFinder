import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js"


function _drawTrips() {
    let trips = ProxyState.trips
    let tripsTemplate = ''
    trips.forEach(trip => tripsTemplate += trip.TripTemplate)
    document.getElementById("trips").innerHTML = /*html*/ `
    
   ${tripsTemplate}
    
    
    
    `

}
export class TripsController {
    constructor(){
        ProxyState.on("trips", _drawTrips);
        _drawTrips()
    }
    drawTrips(){
        _drawTrips()
    }
}


