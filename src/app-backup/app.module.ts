import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MyComp } from './mycomp.component';
import { UserData } from './userdata.service';
import { Department } from './department.service';
import { HeaderComponent } from './header/header.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { PipeComponent } from './pipe/pipe.component';
import { SummaryPipe } from './pipe/summery.pipe';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [AppComponent, MyComp, HeaderComponent, AssignmentComponent, PipeComponent,SummaryPipe, FormComponent],
  imports: [BrowserModule,FormsModule],
  providers: [UserData,Department],
  bootstrap: [AppComponent, MyComp]
})
export class AppModule { }
