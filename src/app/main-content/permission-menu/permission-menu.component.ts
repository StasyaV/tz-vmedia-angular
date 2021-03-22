import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../http.service';

export interface menuItem {
  name?: string,
  checked?: boolean,
  editable?: boolean,
  connections: [],
  id?: number;
}

@Component({
  selector: 'app-permission-menu',
  templateUrl: './permission-menu.component.html',
  styleUrls: ['./permission-menu.component.sass'],
  providers: [HttpService]
})

export class PermissionMenuComponent implements OnInit {
  @Input() title!: string;
  @Input() menu: string = 'Groups';
  menuItems!: menuItem[];
  count: number = 0;
  id!: number;

  constructor(private httpService: HttpService){}

  ngOnInit(): void {
    if (this.menu == 'Groups') {
      this.httpService.getData('groups').subscribe((data: any) => {
        this.id = data.groups.filter((it: any) => it.checked)[0].id;
        return  this.menuItems = data.groups;
      });
    } else if (this.menu == 'Roles') {
      this.httpService.getData('roles').subscribe((data: any) => {
        this.id = data.roles.filter((it: any) => it.checked)[0].id;
        return this.menuItems = data.roles;
      });
    }
  }

  clearCheckedItems(item: menuItem) {
    item.checked = false;      
    item.editable = false;
  }

  onMenuItemClick(item: menuItem) {
    this.menuItems.forEach((menuItem: menuItem) => this.clearCheckedItems(menuItem));
    this.id = item.id;
    item.checked = !item.checked;
    return;
  }

  changeName(event: { target: { value: string; }; }, item: menuItem) {
    item.name = event.target.value;
    item.editable = !item.editable;
  }

  makeItemEditable(item: menuItem) {
    return item.editable = !item.editable;
  }

  addItem(items: menuItem[]) {
    !items ? this.menuItems = [] : this.menuItems.forEach((menuItem: menuItem) => this.clearCheckedItems(menuItem));
    this.count++;
    this.menuItems.push({name: 'New Element-' + this.count, checked: true, editable: true, connections: []})
  }
}
