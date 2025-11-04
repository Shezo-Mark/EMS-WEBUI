import { Component } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent {
  items!: GalleryItem[];

  imageData = data;

  constructor(public gallery: Gallery) {}

  ngOnInit(): void {
    // Creat gallery items
    this.items = this.imageData.map(
      (item: { srcUrl: any; previewUrl: any }) =>
        new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
  }
}
const data = [
  {
    srcUrl: './assets/img/media/1.jpg',
    previewUrl: './assets/img/media/1.jpg',
  },
  {
    srcUrl: './assets/img/media/2.jpg',
    previewUrl: './assets/img/media/2.jpg',
  },
  {
    srcUrl: './assets/img/media/3.jpg',
    previewUrl: './assets/img/media/3.jpg',
  },
  {
    srcUrl: './assets/img/media/4.jpg',
    previewUrl: './assets/img/media/4.jpg',
  },
  {
    srcUrl: './assets/img/media/5.jpg',
    previewUrl: './assets/img/media/5.jpg',
  },
  {
    srcUrl: './assets/img/media/6.jpg',
    previewUrl: './assets/img/media/6.jpg',
  },
  {
    srcUrl: './assets/img/media/7.jpg',
    previewUrl: './assets/img/media/7.jpg',
  },
  {
    srcUrl: './assets/img/media/8.jpg',
    previewUrl: './assets/img/media/8.jpg',
  },
  {
    srcUrl: './assets/img/media/10.jpg',
    previewUrl: './assets/img/media/10.jpg',
  },
];
