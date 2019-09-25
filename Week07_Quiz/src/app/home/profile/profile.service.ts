import { Injectable } from '@angular/core';
import { Ukm } from '../ukm/ukm.model';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    joinedUkm: string[] = [];
    constructor() { }

    addUkm(ukm: string){
        this.joinedUkm.push(ukm);
        console.log(this.joinedUkm);
    }

    getJoinedUkm(){
        return [...this.joinedUkm];
    }

    deleteJoinedUkm(ukm: string){
        this.joinedUkm = this.joinedUkm.filter(p => {
            return p !== ukm;
        })
    }
}
