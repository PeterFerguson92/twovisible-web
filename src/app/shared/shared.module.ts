import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotificationMessageComponent } from './components/notification-message/notification-message.component';

@NgModule({
    declarations: [NavBarComponent, FooterComponent, NotificationMessageComponent],
    imports: [CommonModule],
    exports: [NavBarComponent, FooterComponent, NotificationMessageComponent],
})
export class SharedModule {}
