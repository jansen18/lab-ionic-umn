import { Component, OnInit } from '@angular/core';
import { Ukm } from '../ukm/ukm.model';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    myUkm: string[];
    constructor(private profileService: ProfileService) { }

    ngOnInit() {
        this.myUkm = this.profileService.getJoinedUkm();
    }

    ionViewWillEnter(){
        console.log("ionViewWillEnter Profile");
        this.myUkm = this.profileService.getJoinedUkm();
    }

    removeUkm(ukmName: string){
        this.profileService.deleteJoinedUkm(ukmName);
        this.myUkm = this.profileService.getJoinedUkm();
    }
}
