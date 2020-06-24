import { Component, Input, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-age',
  templateUrl: './chart-age.component.html',
  styleUrls: ['./chart-age.component.scss']
})
export class ChartAgeComponent implements OnInit {

  @Input() statistics;

  constructor() { }

  ngOnInit(): void {
    const chartAge = new Chart('ageChart', {
      type: 'bar',
      data: {
        labels: ['Blue', 'Purple', 'Green', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [this.statistics[0].count, this.statistics[1].count, this.statistics[2].count, this.statistics[3].count],
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
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
