import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../core/footer/footer.component';
import { GuardsComponent } from '../core/guards/guards.component';
import { ServicesComponent } from '../core/services/services.component';
import { HeaderComponent } from '../core/header/header.component';
import { SidebarComponent } from '../core/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FooterComponent,
    GuardsComponent,
    ServicesComponent,
    HeaderComponent,
    SidebarComponent
  ],
  declarations: []
})
export class CoreModule {}
