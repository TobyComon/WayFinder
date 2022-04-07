import { ProxyState } from "../AppState";
import { Trip } from "../Models/Trip";



class TripsService{
    addTrip() {
        ProxyState.trips = [...ProxyState.trips, new Trip]
    }
}


export const tripsService = new TripsService()