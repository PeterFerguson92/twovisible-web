import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleSlideComponent } from './title-slide/title-slide.component';
import { ServicesComponent } from './services/services.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';

@NgModule({
    declarations: [TitleSlideComponent, ServicesComponent, QuoteFormComponent],
    imports: [CommonModule],
    exports: [TitleSlideComponent, ServicesComponent, QuoteFormComponent],
})
export class SectionsModule {}
