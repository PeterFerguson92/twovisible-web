import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotificationMessageComponent } from './components/notification-message/notification-message.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
    declarations: [NavBarComponent, FooterComponent, NotificationMessageComponent, SpinnerComponent],
    imports: [CommonModule],
    exports: [NavBarComponent, FooterComponent, NotificationMessageComponent, SpinnerComponent],
})
export class SharedModule {}
