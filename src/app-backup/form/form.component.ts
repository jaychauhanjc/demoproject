import { Component, OnInit } from '@angular/core';
import{ NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
  }
  /*formsubmit(nf:NgForm) {
    alert("I am called!");
    console.log('i am called',nf.value);
  }*/

  formsubmit(nf: NgForm) {
    alert("I am called!");
    console.log(nf.value);
  }
  username={
    uname:"admin",
    pwd:"admin",
    email:"admin@admin.com",
    city:"ahmedabad"
  }

}
