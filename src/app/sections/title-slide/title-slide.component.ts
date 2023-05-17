import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-title-slide',
    templateUrl: './title-slide.component.html',
    styleUrls: ['./title-slide.component.scss'],
})
export class TitleSlideComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    onSeeProduct() {
        this.router.navigate(['products']);
    }

    onContactUs() {}
}
