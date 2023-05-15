import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleSlideComponent } from './title-slide/title-slide.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
    declarations: [TitleSlideComponent, ServicesComponent],
    imports: [CommonModule],
    exports: [TitleSlideComponent, ServicesComponent],
})
export class SectionsModule {}
