import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseComponent as BaseLayout } from './layouts/base/base.component';
import { AuthComponent as AuthLayout } from './layouts/auth/auth.component';
import { MaterialUIModule } from './material-ui.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUIModule,
  ],
  providers: [AuthLayout, BaseLayout],
  bootstrap: [AppComponent],
})
export class AppModule {}
