import { Component, OnInit, Input } from '@angular/core';

interface Filter {
  name?: string;
  value?: string;
};

interface listItem {
  name?: string;
  checked?: boolean;
  tag?: string;
}

@Component({
  selector: 'app-permission-main-content',
  templateUrl: './permission-main-content.component.html',
  styleUrls: ['./permission-main-content.component.sass']
})
export class PermissionMainContentComponent implements OnInit {
  @Input() title: string = 'Roles';
  @Input() itemsList: listItem[] = [{name: 'Pizza Editor', checked: true, tag: 'Billing'},
    {name: 'Pizza Editor', checked: false, tag: 'Admin'}, {name: 'Pocker cheater', checked: true, tag: 'Billing'},
    {name: 'Drug user', checked: false, tag: 'God mode'}, {name: 'God', checked: true, tag: 'God'},
    {name: 'Editor', checked: false, tag: 'Billing'}, {name: 'User', checked: true, tag: 'Admin'}];
  
  filterList: Filter[] = [{name: 'showAll', value: 'Show all'}, 
    {name: 'showChecked', value: 'Show Checked'}, {name: 'showBilling', value: 'Show "Billing"'}, 
    {name: 'showAdmin', value: 'Show "Admin"'}];

  itemsPerPage = 5;
  pagesCount =this.itemsList.length / this.itemsPerPage;
  constructor() { }

  ngOnInit(): void {
  }

}
