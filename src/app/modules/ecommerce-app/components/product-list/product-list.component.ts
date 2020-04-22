import { Component, OnInit } from '@angular/core';
import { faTh, faList, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ProductType } from '../../models/product.model';
import { SortOrder } from 'src/app/modules/table-sorting/enums/sortOrder.enum';
import { ProductService } from '../../services/product.service';

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

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.initializeSortOptions();
  }

  getProducts ():void {
    this.productService.getData()
      .subscribe({
        next: (data: Array<ProductType>) => {
          this.products = data;
        },
        complete: () => {
          this.products = this.products || [];
        }
      });
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
