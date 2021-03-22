import { Component, OnInit, Input } from '@angular/core';

export interface menuItem {
  name?: string,
  checked?: boolean,
  editable?: boolean,
  connections: []
}

@Component({
  selector: 'app-permission-menu',
  templateUrl: './permission-menu.component.html',
  styleUrls: ['./permission-menu.component.sass']
})
export class PermissionMenuComponent implements OnInit {
  @Input()
  menuItems!: menuItem[];
  @Input()
  title!: string;
  itemConections: [] = [];
  count: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.itemConections = this.menuItems.filter((it) => it.checked)[0].connections;
  }

  clearCheckedItems(item: menuItem) {
    item.checked = false;      
    item.editable = false;
  }

  onMenuItemClick(item: menuItem) {
    this.menuItems.forEach((menuItem: menuItem) => this.clearCheckedItems(menuItem));
    this.itemConections = item.connections;
    return item.checked = !item.checked;
  }

  changeName(event: { target: { value: string; }; }, item: menuItem) {
    item.name = event.target.value;
    item.editable = !item.editable;
  }

  makeItemEditable(item: menuItem) {
    return item.editable = !item.editable;
  }

  addItem(items: menuItem[]) {
    console.log(items);
    !items ? this.menuItems = [] : this.menuItems.forEach((menuItem: menuItem) => this.clearCheckedItems(menuItem));
    this.count++;
    this.menuItems.push({name: 'New Element-' + this.count, checked: true, editable: true, connections: []})
  }
}
