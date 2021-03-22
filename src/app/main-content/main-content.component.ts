import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.sass']
})
export class MainContentComponent implements OnInit {
  @Input()
  activeLink!: string;
  menuItems!: [];
  constructor() { }

  ngOnInit(): void {
  }

  groupsList = [{name: 'Admins', checked: true, editable: false, 
    connections: [{name: 'Pizza Editor', checked: true, tag: 'Billing'},
      {name: 'Pizza Editor', checked: false, tag: 'Admin'}, {name: 'Pocker cheater', checked: true, tag: 'Billing'},
      {name: 'Drug user', checked: false, tag: 'God mode'}, {name: 'God', checked: true, tag: 'God mode'},
      {name: 'Editor', checked: false, tag: 'Billing'}, {name: 'User', checked: true, tag: 'Admin'}]
      }, 
    {name: 'General Managers', checked: false, editable: false, 
    connections: [{name: 'Pizza Editor', checked: true, tag: 'Admin'}, {name: 'Cheater', checked: true, tag: 'Billing'},
      {name: 'God', checked: true, tag: 'God mode'}, {name: 'Editor', checked: false, tag: 'Billing'}, 
      {name: 'User', checked: true, tag: 'Admin'}]
      }, 
    {name: 'Managers - Tech', checked: false, editable: false,
    connections: [{name: 'Pizza Editor', checked: true, tag: 'Billing'},
      {name: 'Pizza Editor', checked: false, tag: 'Admin'}, {name: 'Pocker cheater', checked: true, tag: 'Billing'},
      {name: 'Drug user', checked: false, tag: 'God mode'}, {name: 'God', checked: true, tag: 'God mode'},
      {name: 'Editor', checked: false, tag: 'Billing'}, {name: 'User', checked: true, tag: 'Admin'}]
      },
    {name: 'Manager - Billing', checked: false, editable: false, 
    connections: [{name: 'Editor', checked: false, tag: 'Billing'}, {name: 'User', checked: true, tag: 'Admin'}]}, 
     
    {name: 'Manager - Sales', checked: false, editable: false,
    connections: [{name: 'Editor', checked: false, tag: 'Billing'}, {name: 'User', checked: true, tag: 'Admin'}]}, 
    {name: 'Support - Tech', checked: false, editable: false, connections: []},
    {name: 'Support - Billing', checked: false, editable: false, connections: []},
    {name: 'Support - Sales', checked: false, editable: false, connections: []}
  ];

  rolesList = [{name: 'Pizza Editor', checked: true, editable: false,
    connections: [{name: 'Admin', checked: false, tag: 'Billing'}, {name: 'Manager - Sales', checked: true, tag: 'Admin'}]}, 
    {name: 'Dust cniffer', checked: false, editable: false, connections: []}, 
    {name: 'Pocker cheater', checked: false, editable: false, connections: []},
    {name: 'Manager - Billing', checked: false, editable: false, connections: []},
    {name: 'Drug user', checked: false, editable: false, connections: []},
    {name: 'Support - Tech', checked: false, editable: false, connections: []},
  ]; 
}
