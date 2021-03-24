import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { HttpService } from '../../../http.service';

interface Filter {
  name?: string;
  value?: string;
};

interface listItem {
  name?: string;
  checked?: boolean;
  tag?: string;
  id?: number;
}

@Component({
  selector: 'app-permission-main-content',
  templateUrl: './permission-main-content.component.html',
  styleUrls: ['./permission-main-content.component.sass'],
  providers: [HttpService]
})
export class PermissionMainContentComponent implements OnInit, OnChanges {
  form: FormGroup;
  @Input() title!: string;
  @Input() id!: string;
  itemsList: listItem[] = [];

  filterList: Filter[] = [{name: 'showAll', value: 'Show all'}, 
    {name: 'showChecked', value: 'Show Checked'}, {name: 'showBilling', value: 'Show "Billing"'}, 
    {name: 'showAdmin', value: 'Show "Admin"'}, {name: 'showGod', value: 'Show "God"'}];

  filterControl = new FormControl(this.filterList[0].name);
  search = new FormControl();
  filteredItems: listItem[] = [];
  length = this.filteredItems.length;
  defaultPageSize = 5;
  pageSize = this.defaultPageSize;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  startRow: number;
  endRow: number;
  allItems!: any[];

  constructor(private httpService: HttpService) {
    this.form = new FormGroup({
      filter: this.filterControl,
      search: this.search
    });
    this.startRow = 0;
    this.endRow = this.pageSize - 1;
  }

  ngOnInit(): void {
      this.httpService.getData('main-content-data').subscribe((data: any) => {
        this.allItems = data.content;
        this.itemsList = this.allItems.filter((it: any) => this.id == it.id)[0].items;
        this.length = this.itemsList.length;
        this.filteredItems = this.itemsList;
        return;
    });
  }

  ngOnChanges(changes: any) {
    this.id = changes.id.currentValue;
    this.form.reset();
    this.filterControl = new FormControl(this.filterList[0].name);
    if (this.allItems) {
      this.itemsList = this.allItems.filter((it: any) => this.id == it.id)[0].items;
      this.filteredItems = this.itemsList;
      this.length = this.itemsList.length;
    }
  }

  checkItem(item: listItem) {
    item.checked = !item.checked;
  }

  getFilteredDataBySearch(event: { target: { value: string; }; } ) {
    this.filteredItems = this.itemsList.filter((item: any) => {
      return item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
    });
  };

  getFilteredDataBySelect(event: { value: string; }) {
    switch (event.value) {
      case 'showAll':
        return this.filteredItems = this.itemsList;
      case 'showChecked':
        return this.filteredItems = this.itemsList.filter((item: listItem) => item.checked);
      case 'showBilling':
        return this.filteredItems = this.itemsList.filter((item: listItem) => item.tag == 'Billing');
      case 'showAdmin':
        return this.filteredItems = this.itemsList.filter((item: listItem) => item.tag == 'Admin');
      case 'showGod':
        return this.filteredItems = this.itemsList.filter((item: listItem) => item.tag == 'God mode');
      default:
        return this.filteredItems = this.itemsList;
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

    if (this.endRow > this.filteredItems.length) {
      this.endRow = this.filteredItems.length - 1;
    }
  }

}
