import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IEstate } from '../shared/models/estate';
import { ICategory } from '../shared/models/estateCategory';
import { IAgent } from '../shared/models/estateAgent';
import { EstateParams } from '../shared/models/estateParams';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  @ViewChild('search') searchTerm: ElementRef;
   estates: IEstate[];
   category: ICategory[];
   agents: IAgent[];
   estateParams = new EstateParams();
   totalCount: number;
   sort = [
     { name: 'Newest', value: 'dateDesc' },
     { name: 'Price Low', value: 'priceAsc'},
     { name: 'Price High', value: 'priceDesc'},
   ];


  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getEstates();
    this.getCategory();
  }

  getEstates() {
    this.homeService.getEstates(this.estateParams).subscribe(response => {
      this.estates = response.data;
      this.estateParams.pageNumber = response.pageIndex;
      this.estateParams.pageSize = response.pageSize;
      this.totalCount = response.count;
    }, error => {
      console.log(error);
    });
  }

  getCategory() {
   this.homeService.getCategory().subscribe(response => {
     this.category = [{ id: 0, name: 'Select Category' }, ...response];
     this.category.shift();
   }, error => {
     console.log(error);
   });
  }

  onCategorySelected(estateCategoryId: number){
    this.estateParams.estateCategoryId = estateCategoryId;
    this.estateParams.pageNumber = 1;
    this.getEstates();
  }

  onSortSelected(sort: string){
    this.estateParams.sort = sort;
    this.getEstates();
  }

  onPageChanged(event: any) {
    if (this.estateParams.pageNumber !== event){
        this.estateParams.pageNumber = event;
        this.getEstates();
    }
  }

  onSearch() {
    this.estateParams.search = this.searchTerm.nativeElement.value;
    this.estateParams.pageNumber = 1;
    this.getEstates();
  }

}
