import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './components/pager/pager.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RouterModule } from '@angular/router';
import { NgxGalleryModule } from '@nomadreservations/ngx-gallery';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';



@NgModule({
  declarations: [PagerComponent, PagingHeaderComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule,
    NgxGalleryModule
  ],
  exports: [
    PaginationModule,
    PagerComponent,
    RouterModule,
    NgxGalleryModule,
    PagingHeaderComponent,
    CarouselModule
  ]

})
export class SharedModule { }
