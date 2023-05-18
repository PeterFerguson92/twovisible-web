import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { SectionsModule } from './sections/sections.module';
import { QuoteComponent } from './quote/quote.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        QuoteComponent,
        ProductsComponent,
        ServicesComponent,
        AboutUsComponent,
    ],
    imports: [BrowserModule, SharedModule, SectionsModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
