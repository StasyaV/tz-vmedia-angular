import { Component, OnInit, Input } from '@angular/core';

export interface menuItem {
  name?: string,
  checked?: boolean,
  editable?: boolean
}

@Component({
  selector: 'app-permission-menu',
  templateUrl: './permission-menu.component.html',
  styleUrls: ['./permission-menu.component.sass']
})
export class PermissionMenuComponent implements OnInit {
  @Input() menuItems = [
    {name: 'First Element', checked: true, editable: false}
  ];
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  clearCheckedItems(item: menuItem) {
    item.checked = false;      
    item.editable = false;
  }

  onMenuItemClick(event: { target: {id: string}}) {
    for (let i = 0; i < this.menuItems.length; i++) {
      this.clearCheckedItems(this.menuItems[i]);
      event.target.id == this.menuItems[i].name ? this.menuItems[i].checked = true : false;
    }   
  }

  changeName(event: { target: { value: string; }; }, item: menuItem) {
    console.log(name);
    item.name = event.target.value;
    item.editable = !item.editable;
    console.log(item);
  }

  addItem() {
    this.count++;
    this.menuItems.forEach((menuItem) => this.clearCheckedItems(menuItem));
    this.menuItems.push({name: 'New Element-' + this.count, checked: true, editable: true})
  }
}
