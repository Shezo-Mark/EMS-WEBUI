import { Component } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent {
  public items = [
    {
      id: 1,
      Item1: 'View profile',
      Item2: ' Edit',
      Item3: ' Massage',
      Item4: 'Delete',
    },
  ];
}
