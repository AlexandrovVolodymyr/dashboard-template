import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';

import { DashboardViewComponent } from './containers/dashboard-view/dashboard-view.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { StatisticCardComponent } from './components/statistic-card/statistic-card.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ChartGenderComponent } from './components/chart-gender/chart-gender.component';
import { ChartAgeComponent } from './components/chart-age/chart-age.component';
import { ChartIncomeComponent } from './components/chart-income/chart-income.component';
import { MainNavItemComponent } from './components/main-nav-item/main-nav-item.component';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';

const routes: Routes = [
  {
    path: '', component: DashboardViewComponent
  }
];

@NgModule({
  declarations: [
    DashboardViewComponent,
    GalleryComponent,
    StatisticsComponent,
    StatisticCardComponent,
    ChartsComponent,
    ChartGenderComponent,
    ChartAgeComponent,
    ChartIncomeComponent,
    MainNavItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatBadgeModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    MatListModule,
    MatRippleModule
  ],
  exports: [
    MainNavItemComponent
  ]
})
export class DashboardModule {}
