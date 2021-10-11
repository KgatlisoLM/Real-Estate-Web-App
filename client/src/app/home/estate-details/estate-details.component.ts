import { Component, OnInit } from '@angular/core';
import { IEstateDetail } from 'src/app/shared/models/estateDetail';
import { HomeService } from '../home.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@nomadreservations/ngx-gallery';


@Component({
  selector: 'app-estate-details',
  templateUrl: './estate-details.component.html',
  styleUrls: ['./estate-details.component.scss']
})
export class EstateDetailsComponent implements OnInit {
      estate: IEstateDetail;
      galleryOptions: NgxGalleryOptions[];
      galleryImages: NgxGalleryImage[];



  constructor(private homeService: HomeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.loadEstate();

    this.galleryOptions = [
      {
        width: '640px',
        height: '640px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
    ];
  }


  loadEstate() {
    this.homeService.getEstate( +this.activatedRoute.snapshot.paramMap.get('id')).subscribe(estate => {
      this.estate = estate;
      this.galleryImages = this.getImages();
    }, error => {
       console.log(error);
    });
  }

  getImages() {
    const imageUrls = [];
    for (const item of this.estate.estatePhotos) {
      imageUrls.push({
         small: item.imageUrl,
         medium: item.imageUrl,
         big: item.imageUrl
      });
    }
    return imageUrls;
  }


}
