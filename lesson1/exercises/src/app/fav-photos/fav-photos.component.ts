import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favourite photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.launchcode.org/assets/LaunchCode-logo-e8cafd1600e69d46035ac2079a1367934739a97bec2048c771c7b869115a87be.jpg';
  image3 = 'https://www.launchcode.org/assets/homepage/handshake-skin-tones-adb9e5a62c9bfd60e62f569978701b0434284eae3449244aefc83b22f90c87bb.png';

  constructor() { }

  ngOnInit() {
  }

}