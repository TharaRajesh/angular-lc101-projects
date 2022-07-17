import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://pluspng.com/img-png/png-logo-design-sample-logo-design-09-388.png';
  image2 = 'https://images.designtrends.com/wp-content/uploads/2015/11/23070945/Colorful-Butterfly-Logo-Design.jpg';
  image3 = 'https://cdn.dribbble.com/users/3166100/screenshots/6277131/yoga.logo.01_4x.jpg';

  constructor() { }

  ngOnInit() {
  }

}