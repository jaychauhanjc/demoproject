import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  course = {
    title: "Angular 5 for Experts",
    rating: 4.7557,
    students: 45200,
    price: 100,
    releaseDate: new Date(2018,3,10),
    description: 'So this is the content we want to display the world. How we are going to obay the rules that are created by ceazer. Lautado wo shaan o shawkat siezar ko jo seazer ki hi hai'
  }
  constructor() { }

  ngOnInit() {
  }

}
