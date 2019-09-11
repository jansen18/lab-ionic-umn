import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController, ActionSheetController, LoadingController  } from '@ionic/angular';
import { BookingService } from '../booking.service';

@Component({
    selector: 'app-create-booking',
    templateUrl: './create-booking.component.html',
    styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
    @Input() selectedPlace: Place;

    constructor(
        private modalCtrl: ModalController,
        private actionSheetController: ActionSheetController,
        private loadingCtrl: LoadingController,
        private bookingService: BookingService
    ) { }

    ngOnInit() {}

    onCancel() {
        this.modalCtrl.dismiss(null, 'cancel');
    }

    onBookPlace() {
        this.presentActionSheet();
    }

    async presentActionSheet(){
        const actionSheet = await this.actionSheetController.create({
            header: 'Book Place',
            buttons: [
                {
                    text: 'Book w/ Random Date',
                    handler: () => {
                        this.bookThisPlace();
                    }
                },
                {
                    text: 'Cancel',
                    handler: () => {
                        this.modalCtrl.dismiss('from action sheet controller', 'cancel');
                    }
                }
            ]
        });
        await actionSheet.present();
    }

    bookThisPlace() {
        this.loadingCtrl.create({
            keyboardClose:true,
            message: 'Booking the place ...'
        })
        .then(loadingEl => {
            loadingEl.present();
            setTimeout(() => {
                loadingEl.dismiss();
                this.bookingService.bookPlace(this.selectedPlace);
                this.modalCtrl.dismiss({message: 'This is a dummy message!'}, 'confirm');
            }, 2000);
        });
    }
}
