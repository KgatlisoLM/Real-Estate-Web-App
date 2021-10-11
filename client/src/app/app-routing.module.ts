import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EstateDetailsComponent } from './home/estate-details/estate-details.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: EstateDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
