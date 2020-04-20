import { Component, OnInit } from '@angular/core';
import { faTh, faList, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ProductType } from '../../models/product.model';
import { SortOrder } from 'src/app/modules/table-sorting/enums/sortOrder.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Array<ProductType>;
  viewType: string = 'grid';
  sortOrder: SortOrder = SortOrder.NO_SORT;
  gridIcon: IconDefinition = faTh;
  listIcon: IconDefinition = faList;
  sortOptions: Array<any> = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
    this.initializeSortOptions();
  }

  getProducts ():void {
    this.activatedRoute.data
      .subscribe((data:  { data : Array<ProductType> }) => {
        this.products = data.data;
      })
  }

  initializeSortOptions () {
    this.sortOptions.push({
      label: 'Select',
      value: SortOrder.NO_SORT
    });
    this.sortOptions.push({
      label: 'Price Low To High',
      value: SortOrder.ASC
    });
    this.sortOptions.push({
      label: 'Price High To Low',
      value: SortOrder.DESC
    });
  }

  sort(event) {
    this.sortOrder = parseInt(event.target.value);
  }

  updateView (viewType: string) {
    this.viewType = viewType;
  }

}
