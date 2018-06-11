import {Route,RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { UserComponent } from './user/user.component';
import { Component } from '@angular/core';

export const routing = RouterModule.forRoot([
    {path:'',component: LoginComponent},
    {path:'services',component : ServicesComponent},
    {path:'userdetail',component : UserComponent},
]);