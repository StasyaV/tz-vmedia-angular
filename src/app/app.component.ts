import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'Permissions';
  navList = ['Groups', 'Roles'];
  activeLink = 'Groups';

  groupsList = [{name: 'Admins', checked: true, editable: false}, 
    {name: 'General Managers', checked: false, editable: false}, 
    {name: 'Managers - Tech', checked: false, editable: false}, {name: 'Manager - Billing', checked: false, editable: false},
    {name: 'Manager - Sales', checked: false, editable: false}, {name: 'Support - Tech', checked: false, editable: false},
    {name: 'Support - Billing', checked: false, editable: false}, {name: 'Support - Sales', checked: false, editable: false}
  ];

  rolesList = [{name: 'Pizza Editor', checked: true, editable: false}, 
    {name: 'Dust cniffer', checked: false, editable: false}, 
    {name: 'Pocker cheater', checked: false, editable: false}, {name: 'Manager - Billing', checked: false, editable: false},
    {name: 'Drug user', checked: false, editable: false}, {name: 'Support - Tech', checked: false, editable: false},
  ];
}
