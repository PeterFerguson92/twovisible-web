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

    onVisitStore() {
      window.open('https://buy.stripe.com/test_00gaGsdY5aVndMs9AB', '_blank');
    }

    onContactUs() {
        this.router.navigate(['aboutUs']);
    }
}
