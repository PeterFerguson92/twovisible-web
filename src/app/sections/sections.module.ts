import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleSlideComponent } from './title-slide/title-slide.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ServicesDetailComponent } from './services-detail/services-detail.component';
import { ServicesSlideShowComponent } from './services-slide-show/services-slide-show.component';

@NgModule({
    declarations: [
        TitleSlideComponent,
        QuoteFormComponent,
        ProductDetailComponent,
        ServicesDetailComponent,
        ServicesSlideShowComponent,
    ],
    imports: [CommonModule],
    exports: [
        TitleSlideComponent,
        QuoteFormComponent,
        ProductDetailComponent,
        ServicesDetailComponent,
        ServicesSlideShowComponent,
    ],
})
export class SectionsModule {}
