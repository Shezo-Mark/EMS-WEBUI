import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent {
  Table = [
    {
      Quantity: 1,
    },
  ];
  constructor(private toaster: ToastrService) {}

  ngOnInit(): void {}
  public finish() {
    this.toaster.success('Successfully Done!');
  }

  decrease(id: unknown) {
    let filterData = this.Table.filter((ele) => {
      if (ele.Quantity > 0) {
        ele.Quantity--;
      }
    });
  }
  increase(id: unknown) {
    let filterData = this.Table.filter((ele) => {
      if (ele == id) {
        ele.Quantity++;
      }
    });
  }
}
