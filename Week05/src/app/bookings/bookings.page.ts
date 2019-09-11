import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { Place } from '../places/place.model';

@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.page.html',
    styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
    private places: Place[];

    constructor(
        private bookingService: BookingService
    ) { }

    ngOnInit() {
        //this.places = this.bookingService.getAllBookedPlaces();
    }

    cancelBooking(placeId: string){
        this.bookingService.cancelBookedPlace(placeId);
    }

    ionViewWillEnter(){
        this.places = this.bookingService.getAllBookedPlaces();
    }

}
