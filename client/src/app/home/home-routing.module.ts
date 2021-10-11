import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { EstateDetailsComponent } from './estate-details/estate-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: EstateDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
