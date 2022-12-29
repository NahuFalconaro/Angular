import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';
import { BtnAuthComponent } from './components/btn-auth/btn-auth.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent,
    BtnAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-8opqkmsb7173garv.us.auth0.com',
      clientId: 'c4jYvPolWHrELWC50yl7Ps08qbokrOkt'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
