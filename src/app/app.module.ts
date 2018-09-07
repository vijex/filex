import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { RoutingModule } from './routing/routing.module';
import { EcommerceModule } from './modules/ecommerce/ecommerce.module';
import { HomeModule } from './modules/home/home.module';
import { LayoutModule } from './modules/layout/layout.module';
import { VaultModule } from './modules/vault/vault.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    EcommerceModule,
    HomeModule,
    LayoutModule,
    VaultModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
