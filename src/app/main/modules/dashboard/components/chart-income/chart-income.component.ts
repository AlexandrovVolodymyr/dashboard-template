import { Component, Input, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-income',
  templateUrl: './chart-income.component.html',
  styleUrls: ['./chart-income.component.scss']
})
export class ChartIncomeComponent implements OnInit {

  @Input() statistics;

  constructor() { }

  ngOnInit(): void {
    const chartIncome = new Chart('chartIncome', {
      type: 'bar',
      data: {
        labels: ['Employees', 'Contacts', 'Documentations', 'Consultations'],
        datasets: [{
          // label: '# of Votes',
          data: [this.statistics[0].income, this.statistics[1].income, this.statistics[2].income, this.statistics[3].income],
          backgroundColor: [
            'rgba(0, 0, 255, 0.4)',
            'rgba(128, 0, 128, 0.4)',
            'rgba(0, 73, 128, 0.4)',
            'rgba(255, 165, 0, 0.4)',
          ],
          borderColor: [
            'rgba(0, 0, 255, 0.4)',
            'rgba(128, 0, 128, 0.4)',
            'rgba(0, 73, 128, 0.4)',
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
