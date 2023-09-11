import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-packages',
    templateUrl: './packages.component.html',
    styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit {
    coverImagePath = '../../../../assets/images/2visible/lights.JPG';

    @Output()
    selectedPackage = new EventEmitter<string>();
    constructor() {}

    ngOnInit() { }

    onSelect(packa) {
        this.selectedPackage.emit(packa);
    }
}
