import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavItems } from '../../../../shared/interfaces/nav-items';

@Component({
  selector: 'app-main-nav-item',
  templateUrl: './main-nav-item.component.html',
  styleUrls: ['./main-nav-item.component.scss']
})
export class MainNavItemComponent implements OnInit {

  expanded = false;
  @Input() item: NavItems;
  @Input() depth = 0;
  @Input() isOpen: boolean;

  @ViewChild('matListItem') matListItem: ElementRef;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  toggle(item: any) {
    if (item.children) {
      this.expanded = !this.expanded;
    } else {
      this.router.navigate([item.route]);
    }
  }

  // click inside sidenav for close menu
  // @HostListener('document:click', ['$event.target']) onMouseEnter(targetElement) {
  //   const clickedInside = this.matListItem['_element'].nativeElement.closest('.mat-drawer-inner-container').contains(targetElement);
  //   if (!clickedInside) {
  //     this.expanded = false;
  //   }
  // }
}
