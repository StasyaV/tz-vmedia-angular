import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PageEvent} from '@angular/material/paginator';

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
  form: FormGroup;
  @Input()
  title!: string;
  @Input()
  _itemsList!: listItem[];
  @Input()
    set itemsList(items: listItem[]) {
      this._itemsList = items;
  }
  get itemsList() { 
    return this._itemsList;
  }


  filterList: Filter[] = [{name: 'showAll', value: 'Show all'}, 
    {name: 'showChecked', value: 'Show Checked'}, {name: 'showBilling', value: 'Show "Billing"'}, 
    {name: 'showAdmin', value: 'Show "Admin"'}, {name: 'showGod', value: 'Show "God"'}];

  filterControl = new FormControl(this.filterList[0].name);
  items: listItem[] = [];
  length = this.items.length;
  defaultPageSize = 5;
  pageSize = this.defaultPageSize;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  startRow: number;
  endRow: number;

  constructor() {
    console.log('1');
    this.form = new FormGroup({
      filter: this.filterControl
    });
    this.startRow = 0;
    this.endRow = this.pageSize - 1;
  }

  ngOnInit(): void {
    console.log('2');
    this.items = this._itemsList;
    this.length = this.items.length;
    
    console.log('come',this.itemsList);
    console.log(this.items);
  }

  checkItem(item: listItem) {
    item.checked = !item.checked;
  }

  getFilteredDataBySearch(event: { target: { value: string; }; } ) {
    this.items = this.itemsList.filter((item: listItem) => {
      return item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
    });
  };

  getFilteredDataBySelect(event: { value: string; }) {
    switch (event.value) {
      case 'showAll':
        return this.items = this.itemsList;
      case 'showChecked':
        return this.items = this.itemsList.filter((item: listItem) => item.checked);
      case 'showBilling':
        return this.items = this.itemsList.filter((item: listItem) => item.tag == 'Billing');
      case 'showAdmin':
        return this.items = this.itemsList.filter((item: listItem) => item.tag == 'Admin');
      case 'showGod':
        return this.items = this.itemsList.filter((item: listItem) => item.tag == 'God mode');
      default:
        return this.items = this.itemsList;
      }
  }

  public onPageChange(event: { pageIndex: number; pageSize: number; }): void {
    if (event.pageIndex == 0) {
      this.pageSize = event.pageSize;
      this.startRow = 0;
      this.endRow = this.pageSize - 1;
      return;
    }

    this.pageSize = event.pageSize;
    this.startRow = this.pageSize * event.pageIndex;
    this.endRow = (this.pageSize * event.pageIndex) + 1;

    if (this.endRow > this.items.length) {
      this.endRow = this.items.length - 1;
    }
  }

}
