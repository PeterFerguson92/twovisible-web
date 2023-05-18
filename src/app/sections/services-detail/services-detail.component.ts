import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-services-detail',
    templateUrl: './services-detail.component.html',
    styleUrls: ['./services-detail.component.scss'],
})
export class ServicesDetailComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    onGetQuote() {
        this.router.navigate(['/quote']);
    }
}
