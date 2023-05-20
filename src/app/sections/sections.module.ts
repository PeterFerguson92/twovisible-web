import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TitleSlideComponent } from './title-slide/title-slide.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ServicesDetailComponent } from './services-detail/services-detail.component';
import { AboutUsDetailComponent } from './about-us-detail/about-us-detail.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { VideoServiceComponent } from './video-service/video-service.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';

@NgModule({
    declarations: [
        TitleSlideComponent,
        QuoteFormComponent,
        ProductDetailComponent,
        ServicesDetailComponent,
        AboutUsDetailComponent,
        HomeSliderComponent,
        VideoServiceComponent,
        ProductSliderComponent,
    ],
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        TitleSlideComponent,
        QuoteFormComponent,
        ProductDetailComponent,
        ServicesDetailComponent,
        AboutUsDetailComponent,
        HomeSliderComponent,
        VideoServiceComponent,
        ProductSliderComponent,
    ],
})
export class SectionsModule {}
