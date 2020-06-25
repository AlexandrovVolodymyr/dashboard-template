import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  isOpen = false;
  expanded = false;
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
