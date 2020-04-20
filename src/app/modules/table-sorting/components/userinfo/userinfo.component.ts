import { Component, OnInit } from '@angular/core';
import { faSort, faSortDown, faSortUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { UserType } from '../../models/user.model';
import { SortOrder } from '../../enums/sortOrder.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {
  users: Array<UserType>;
  sortOrder: SortOrder;
  sortKey: string;
  sortIcon: IconDefinition;
  tableHeaders: Array<string>;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.sortIcon = this.getSortIcon(this.sortOrder);
  }

  getUsers (): void {
    this.activatedRoute.data
      .subscribe((data: { data : Array<UserType> }) => {
        this.users = data.data;
        if (Array.isArray(this.users) && this.users.length) {
          this.tableHeaders = Object.keys(this.users[0]);
        }
      });
  }

  sort (key: string): void {
    if (key !== this.sortKey) {
      this.sortKey = key;
      this.sortOrder = SortOrder.ASC;
    } else {
      this.sortOrder = ++this.sortOrder%3;
    }
    this.sortIcon = this.getSortIcon(this.sortOrder);
  }

  getSortIcon (sortOrder: SortOrder): IconDefinition {
    let sortIcon: IconDefinition;

    switch (sortOrder) {
      case SortOrder.ASC:
        sortIcon = faSortUp;
        break;
      case SortOrder.DESC:
        sortIcon = faSortDown;
        break;
      default:
        sortIcon = faSort;
    }

    return sortIcon;
  }
}
