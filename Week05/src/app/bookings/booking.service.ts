import { Injectable } from '@angular/core';
import { Place } from '../places/place.model';

@Injectable({
    providedIn: 'root'
})
export class BookingService {
    private placesBooked: Place[] = new Array();

    constructor() { }

    bookPlace(place: Place){
        this.placesBooked.push(place);
        console.log(this.placesBooked);
    }

    cancelBookedPlace(placeId: string){
        this.placesBooked = this.placesBooked.filter( x => {
            if(x.id != placeId){
                return true;
            }
            return false;
        })
    }

    getAllBookedPlaces(){
        return [...this.placesBooked];
    }
}
