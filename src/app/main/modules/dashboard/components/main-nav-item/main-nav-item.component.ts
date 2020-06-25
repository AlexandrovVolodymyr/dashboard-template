import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-nav-item',
  templateUrl: './main-nav-item.component.html',
  styleUrls: ['./main-nav-item.component.scss']
})
export class MainNavItemComponent implements OnInit {

  expanded = false;
  @Input() item: any;
  @Input() depth = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  toggle(item: any) {
    if (item.children) {
      this.expanded = !this.expanded;
    } else {
      this.router.navigate([item.route]);
      console.log(this.route);
    }
  }
}
