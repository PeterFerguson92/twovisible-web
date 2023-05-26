import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuoteComponent } from './quote/quote.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ComingSoonComponent } from './sections/coming-soon/coming-soon.component';

const routes: Routes = [
    { path: '**', component: ComingSoonComponent },

    // { path: 'home', component: HomeComponent },
    // { path: 'quote', component: QuoteComponent },
    // { path: 'products', component: ProductsComponent },
    // { path: 'services', component: ServicesComponent },
    // { path: 'aboutUs', component: AboutUsComponent },
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
