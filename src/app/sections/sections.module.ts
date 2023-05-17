import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleSlideComponent } from './title-slide/title-slide.component';
import { ServicesComponent } from './services/services.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
    declarations: [TitleSlideComponent, ServicesComponent, QuoteFormComponent, ProductDetailComponent],
    imports: [CommonModule],
    exports: [TitleSlideComponent, ServicesComponent, QuoteFormComponent, ProductDetailComponent],
})
export class SectionsModule {}
