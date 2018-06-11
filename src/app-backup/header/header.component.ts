import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name="Semin";
  profilepic="http://lorempixel.com/400/200/";
  selected = true;
  callme(){
    console.log('I am called');
  }
  constructor() { }

  ngOnInit() {
  }

}
