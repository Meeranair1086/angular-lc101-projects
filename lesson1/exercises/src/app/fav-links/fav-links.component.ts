import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
favLink=['https://www.w3schools.com/','https://www.launchcode.org/','https://angular.io']
  constructor() { }

  ngOnInit() {
  }

}
