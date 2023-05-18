import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-about-us-detail',
    templateUrl: './about-us-detail.component.html',
    styleUrls: ['./about-us-detail.component.scss'],
})
export class AboutUsDetailComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    onRedirect(section: string) {
        this.router.navigate([section]);
    }
}
