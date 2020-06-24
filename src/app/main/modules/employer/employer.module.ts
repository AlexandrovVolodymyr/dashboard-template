import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployerViewComponent } from './containers/employer-view/employer-view.component';

const routes: Routes = [
  {
    path: '', component: EmployerViewComponent
  }
];

@NgModule({
  declarations: [EmployerViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EmployerModule { }
