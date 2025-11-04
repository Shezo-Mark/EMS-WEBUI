import { Component } from '@angular/core';

interface Input {
  id: any;
  firstName: string;
  lastName: string;
  position: string;
  startData: string;
  salary: string;
  email: string;
  editable: any;
}
const inputs: Input[] = [
  {
    id: '1',
    firstName: 'Bella',
    lastName: 'Chloe',
    position: 'System Developer',
    startData: '2018/03/12',
    salary: '$654,765',
    email: 'b.Chloe@datatables.net',
    editable: false,
  },
  {
    id: '2',
    firstName: 'Donna',
    lastName: 'Bond',
    position: 'Account Manager',
    startData: '2012/02/21',
    salary: '$543,654',
    email: 'd.bond@datatables.net',
    editable: false,
  },
  {
    id: '3',
    firstName: 'Harry',
    lastName: 'Carr',
    position: 'Technical Manager',
    startData: '20011/02/87',
    salary: '$86,000',
    email: 'h.carr@datatables.net',
    editable: false,
  },
  {
    id: '4',
    firstName: 'Lucas',
    lastName: 'Dyer',
    position: 'Javascript Developer',
    startData: '2014/08/23',
    salary: '$456,123',
    email: 'l.dyer@datatables.net',
    editable: false,
  },
  {
    id: '5',
    firstName: 'Karen',
    lastName: 'Hill',
    position: 'Sales Manager',
    startData: '2010/7/14',
    salary: '$432,230',
    email: 'k.hill@datatables.net',
    editable: false,
  },
  {
    id: '6',
    firstName: 'Dominic',
    lastName: 'Hudson',
    position: 'Sales Assistant',
    startData: '2015/10/16',
    salary: '$654,300',
    email: 'd.hudson@datatables.net',
    editable: false,
  },
];

const inputs1: Input[] = [
  {
    id: '1',
    firstName: 'Bella',
    lastName: 'Chloe',
    position: 'System Developer',
    startData: '2018/03/12',
    salary: '$654,765',
    email: 'b.Chloe@datatables.net',
    editable: false,
  },
  {
    id: '2',
    firstName: 'Donna',
    lastName: 'Bond',
    position: 'Account Manager',
    startData: '2012/02/21',
    salary: '$543,654',
    email: 'd.bond@datatables.net',
    editable: false,
  },
  {
    id: '3',
    firstName: 'Harry',
    lastName: 'Carr',
    position: 'Technical Manager',
    startData: '20011/02/87',
    salary: '$86,000',
    email: 'h.carr@datatables.net',
    editable: false,
  },
  {
    id: '4',
    firstName: 'Lucas',
    lastName: 'Dyer',
    position: 'Javascript Developer',
    startData: '2014/08/23',
    salary: '$456,123',
    email: 'l.dyer@datatables.net',
    editable: false,
  },
  {
    id: '5',
    firstName: 'Karen',
    lastName: 'Hill',
    position: 'Sales Manager',
    startData: '2010/7/14',
    salary: '$432,230',
    email: 'k.hill@datatables.net',
    editable: false,
  },
  {
    id: '6',
    firstName: 'Dominic',
    lastName: 'Hudson',
    position: 'Sales Assistant',
    startData: '2015/10/16',
    salary: '$654,300',
    email: 'd.hudson@datatables.net',
    editable: false,
  },
];

const inputs2: Input[] = [
  {
    id: '1',
    firstName: 'Bella',
    lastName: 'Chloe',
    position: 'System Developer',
    startData: '2018/03/12',
    salary: '$654,765',
    email: 'b.Chloe@datatables.net',
    editable: false,
  },
  {
    id: '2',
    firstName: 'Donna',
    lastName: 'Bond',
    position: 'Account Manager',
    startData: '2012/02/21',
    salary: '$543,654',
    email: 'd.bond@datatables.net',
    editable: false,
  },
  {
    id: '3',
    firstName: 'Harry',
    lastName: 'Carr',
    position: 'Technical Manager',
    startData: '20011/02/87',
    salary: '$86,000',
    email: 'h.carr@datatables.net',
    editable: false,
  },
  {
    id: '4',
    firstName: 'Lucas',
    lastName: 'Dyer',
    position: 'Javascript Developer',
    startData: '2014/08/23',
    salary: '$456,123',
    email: 'l.dyer@datatables.net',
    editable: false,
  },
  {
    id: '5',
    firstName: 'Karen',
    lastName: 'Hill',
    position: 'Sales Manager',
    startData: '2010/7/14',
    salary: '$432,230',
    email: 'k.hill@datatables.net',
    editable: false,
  },
  {
    id: '6',
    firstName: 'Dominic',
    lastName: 'Hudson',
    position: 'Sales Assistant',
    startData: '2015/10/16',
    salary: '$654,300',
    email: 'd.hudson@datatables.net',
    editable: false,
  },
];

let addNewRow: Input[] = [
  {
    id: '',
    firstName: '',
    lastName: '',
    position: '',
    startData: '',
    salary: '',
    email: '',
    editable: false,
  },
]; 

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss'],
})
export class EditTableComponent {
  constructor() {}

  ngOnInit(): void {}

  user = inputs;
  user1 = inputs1;
  user2 = inputs2;
  addRow = addNewRow;

  trash = (id: any) => {
    var data = this.user.filter((x) => {
      return x.id != id;
    });
    this.user = data;
  };

  edit(item: any) {
    this.user.forEach((element) => {
      element.editable = false;
    });
    item.editable = true;
  }

  update(outPut: any) {
    console.log(outPut);
  }

  trash1 = (id: any) => {
    var data = this.user1.filter((x) => {
      return x.id != id;
    });
    this.user1 = data;
  };

  edit1(item: any) {
    this.user1.forEach((element) => {
      element.editable = false;
    });
    item.editable = true;
  }

  update1(outPut: any) {
    console.log(outPut);
  }

  add(item: any) {
    let update = {
      id: Math.random(),
      firstName: item.firstName,
      lastName: item.lastName,
      position: item.position,
      startData: item.startData,
      salary: item.salary,
      email: item.email,
      editable: item.editable,
    };
    this.user1.push(update);
    this.addRow = [
      {
        id: '',
        firstName: '',
        lastName: '',
        position: '',
        startData: '',
        salary: '',
        email: '',
        editable: false,
      },
    ];

    console.log(this.user1);
  }

  trash2 = (id: any) => {
    var data = this.user2.filter((x) => {
      return x.id != id;
    });
    this.user2 = data;
  };

  edit2(item: any) {
    this.user2.forEach((element) => {
      element.editable = false;
    });
    item.editable = true;
  }

  update2(outPut: any) {
    console.log(outPut);
  }
}
