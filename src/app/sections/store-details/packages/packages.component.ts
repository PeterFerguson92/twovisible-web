import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-packages',
    templateUrl: './packages.component.html',
    styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit {
    coverPackage1Path = '../../../../assets/img/package1.jpeg';
    coverPackage2Path = '../../../../assets/img/package2.jpeg';

    @Output()
    selectedPackage = new EventEmitter<string>();
    constructor() {}

    ngOnInit() { }

    onSelect(packa) {
        this.selectedPackage.emit(packa);
    }
}
