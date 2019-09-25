import { Injectable } from '@angular/core';
import { Ukm } from './ukm.model';

@Injectable({
    providedIn: 'root'
})
export class UkmService {
    ukmList: Ukm[] = [
        new Ukm(
            "UMN PC",
            "Belajar pemrograman untuk Competitive Programming"
        ),
        new Ukm(
            "Basket",
            "Unit Kegiatan Mahasiswa olah raga Basket"
        ),
        new Ukm(
            "Futsal",
            "Unit Kegiatan Mahasiswa olah raga Futsal"
        ),
        new Ukm(
            "Ultima sonora",
            "Kegiatan paduan suara"
        ),
        new Ukm(
            "Robotic",
            "Belajar robotic bersama"
        )
    ];
    constructor() { }

    getUkmList(){
        return [...this.ukmList];
    }
}
