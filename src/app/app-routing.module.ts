import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'quote', component: QuoteComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
