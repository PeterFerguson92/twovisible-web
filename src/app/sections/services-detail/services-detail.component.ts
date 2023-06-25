import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
    PACKAGE_1_PRICE_AFTER_DISCOUNT,
    PACKAGE_1_PRICE_BEFORE_DISCOUNT,
    PACKAGE_2_PRICE_AFTER_DISCOUNT,
    PACKAGE_2_PRICE_BEFORE_DISCOUNT,
} from 'src/constant';

@Component({
    selector: 'app-services-detail',
    templateUrl: './services-detail.component.html',
    styleUrls: ['./services-detail.component.scss'],
})
export class ServicesDetailComponent implements OnInit {
    package1BeforeDiscount = PACKAGE_1_PRICE_BEFORE_DISCOUNT;
    package1AfterDiscount = PACKAGE_1_PRICE_AFTER_DISCOUNT;
    package2BeforeDiscount = PACKAGE_2_PRICE_BEFORE_DISCOUNT;
    package2AfterDiscount = PACKAGE_2_PRICE_AFTER_DISCOUNT;

    constructor(private router: Router) {}

    ngOnInit() {}

    onGetQuote() {
        this.router.navigate(['/quote']);
    }
}
