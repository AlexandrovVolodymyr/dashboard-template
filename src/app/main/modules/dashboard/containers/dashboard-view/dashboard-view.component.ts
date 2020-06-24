import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  statistics = [
    { name: 'Employees', count: '3.100', profit: 0, icon: 'business_center', income: 1000, age: 15 },
    { name: 'Contacts', count: '2.558', profit: 0, icon: 'contacts', income: 1500, age: 12 },
    { name: 'Documentation', count: '0.5', profit: 455, icon: 'folder_shared', income: 1350, age: 18 },
    { name: 'Consultations', count: '1.200', profit: 0, icon: 'chat_bubble', income: 800, age: 30 },
  ];

  gallery = [
    { src: 'assets/images/1.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date: '22/06/2020', badge: '' },
    { src: 'assets/images/2.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', date: '23/06/2020', badge: '' },
    { src: 'assets/images/3.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', date: '24/06/2020', badge: '2' },
  ];

  constructor() { }

  ngOnInit(): void {}

}
