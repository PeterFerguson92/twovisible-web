import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleSlideComponent } from './title-slide/title-slide.component';

@NgModule({
    declarations: [TitleSlideComponent],
    imports: [CommonModule],
    exports: [TitleSlideComponent],
})
export class SectionsModule {}
