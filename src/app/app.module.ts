import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { HttpService } from "./http.service";
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ServicesComponent } from './services/services.component';
import { routing } from './app.routing';


@NgModule({
    declarations: [AppComponent, LandingComponent, LoginComponent, UserComponent, ServicesComponent],
    imports: [BrowserModule, HttpModule, routing],
    bootstrap: [AppComponent, LandingComponent],
    providers: [HttpService]
})
export class AppModule {}