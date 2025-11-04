import { Component } from '@angular/core';
import { wishlist, WishlistList } from './wishlist';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent {

  page = 1;
  public wishList: wishlist[];
  constructor() {
    this.wishList = WishlistList
  }
  ngOnInit(): void {
  }
  RemoveElementFromObjectArray(key: any) {
    this.wishList.forEach((value, index) => {
      if (value.id == key) this.wishList.splice(index, 1);
    });
  }
}
