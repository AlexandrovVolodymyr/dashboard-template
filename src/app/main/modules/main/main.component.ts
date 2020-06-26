import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawerMode } from '@angular/material/sidenav';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavItems } from '../../shared/interfaces/nav-items';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  navItems: NavItems[] = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard',
    },
    {
      name: 'Calendar',
      icon: 'calendar_today',
      route: '/calendar',
    },
    {
      name: 'Chat',
      icon: 'chat',
      route: '/chat',
    },
    {
      name: 'Employer',
      icon: 'topic',
      children: [
        {
          name: 'Sub nav1',
          icon: 'analytics',
          children: [
            {
              name: 'Sub nav1.1',
              icon: 'dashboard',
              route: '/employer',
            },
          ]
        },
        {
          name: 'Sub nav2',
          icon: 'assignment',
          route: '/employer',
        },
        {
          name: 'Sub nav3',
          icon: 'bug_report',
          route: '/employer',
        }
      ]
    }
  ];
  isOpen = false;
  mode: MatDrawerMode = 'side';

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    breakpointObserver: BreakpointObserver,
  ) {
    breakpointObserver.observe([Breakpoints.XSmall])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(result => {
        this.isOpen = !result.matches;
        if (result.matches) {
          this.mode = 'push';
        } else {
          this.mode = 'side';
        }
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
