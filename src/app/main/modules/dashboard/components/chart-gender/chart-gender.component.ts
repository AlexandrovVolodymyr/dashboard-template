import { Component, Input, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-gender',
  templateUrl: './chart-gender.component.html',
  styleUrls: ['./chart-gender.component.scss']
})
export class ChartGenderComponent implements OnInit {

  @Input() statistics;

  constructor() { }

  ngOnInit(): void {
    const genderChart = new Chart('genderChart', {
      type: 'doughnut',
      data: {
        labels: ['Blue', 'Purple', 'Green', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [this.statistics[0].age, this.statistics[1].age, this.statistics[2].age, this.statistics[3].age],
          backgroundColor: [
            'rgba(0, 0, 255, 0.4)',
            'rgba(128, 0, 128, 0.4)',
            'rgba(0, 128, 0, 0.4)',
            'rgba(255, 165, 0, 0.4)',
          ],
          borderColor: [
            'rgba(0, 0, 255, 0.4)',
            'rgba(128, 0, 128, 0.4)',
            'rgba(0, 128, 0, 0.4)',
            'rgba(255, 165, 0, 0.4)',
          ],
          borderWidth: 1
        }],
      },
      options: {
        legend: {
          display: false
        }
      }
    });
  }

}
