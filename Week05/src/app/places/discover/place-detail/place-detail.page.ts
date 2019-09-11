import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';


@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.page.html',
    styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
    place: Place;

    constructor(
        private navCtrl: NavController,
        private route: ActivatedRoute,
        private placeService: PlacesService,
        private modalCtrl: ModalController
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if(!paramMap.has('placeId')){
                this.navCtrl.navigateBack('/places/tabs/discover');
                return;
            }
            this.place = this.placeService.getPlace(paramMap.get('placeId'));
        })
    }

    onBookPlace(){
        this.modalCtrl.create({
            component: CreateBookingComponent,
            componentProps: {selectedPlace: this.place}
        })
        .then(modalEl => {
            modalEl.present();
            return modalEl.onDidDismiss();
        })
        .then(resultData => {
            console.log(resultData.data, resultData.role);
            if(resultData.role === 'confirm'){
                console.log('BOOKED');
            }
        });
    }

}
