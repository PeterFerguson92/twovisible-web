import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SectionsModule } from './sections/sections.module';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StoreComponent } from './store/store.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        QuoteComponent,
        ProductsComponent,
        ServicesComponent,
        AboutUsComponent,
        StoreComponent,
    ],
    imports: [BrowserModule, SharedModule, SectionsModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
