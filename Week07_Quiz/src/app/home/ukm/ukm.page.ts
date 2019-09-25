import { Component, OnInit } from '@angular/core';
import { Ukm } from './ukm.model';
import { UkmService } from './ukm.service';
import { AlertController } from '@ionic/angular';
import { ProfileService } from '../profile/profile.service';

@Component({
    selector: 'app-ukm',
    templateUrl: './ukm.page.html',
    styleUrls: ['./ukm.page.scss'],
})
export class UkmPage implements OnInit {
    loadedUkms: Ukm[];
    constructor(
        private ukmService: UkmService, 
        private alertController: AlertController,
        private profileService: ProfileService
    ) { }

    ngOnInit() {
        this.loadedUkms = this.ukmService.getUkmList();
    }

    onJoinClick(ukmName: string){
        this.presentJoinConfirm(ukmName);
    }

    async presentJoinConfirm(ukmName: string){
        const alert = await this.alertController.create({
            message: 'Beneran mau join?',
            buttons: [
                {
                    text: 'Batal',
                    role: 'cancel',
                    cssClass: 'primary'
                },
                {
                    text: 'Serius',
                    handler: () => {
                        this.profileService.addUkm(ukmName);
                    }
                }
            ]
        });

        await alert.present();
    }
}
