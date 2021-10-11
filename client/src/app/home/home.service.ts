import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EstateParams } from '../shared/models/estateParams';
import { map } from 'rxjs/operators';
import { ICategory } from '../shared/models/estateCategory';
import { IAgent } from '../shared/models/estateAgent';
import { IPagination } from '../shared/models/pagination';
import { IEstateDetail } from '../shared/models/estateDetail';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }


getEstates(estateParams: EstateParams){
  let params = new HttpParams();

  if (estateParams.estateCategoryId !== 0){
    params = params.append('estateCategoryId', estateParams.estateCategoryId.toString());
  }

  if (estateParams.search) {
   params = params.append('search', estateParams.search);
  }

  params = params.append('sort', estateParams.sort);
  params = params.append('pageIndex', estateParams.pageNumber.toString());
  params = params.append('pageIndex', estateParams.pageSize.toString());

  return this.http.get<IPagination>(this.baseUrl + 'estates', {observe: 'response', params})
  .pipe(
    map(response => {
      return response.body;
    })
  );

}

getEstate(id: number) {
  return this.http.get<IEstateDetail>(this.baseUrl + 'estates/' + id);
}

getCategory() {
  return this.http.get<ICategory[]>(this.baseUrl + 'estates/category');
}

getAgent() {
  return this.http.get<IAgent[]>(this.baseUrl + 'estates/agents');
}

}
