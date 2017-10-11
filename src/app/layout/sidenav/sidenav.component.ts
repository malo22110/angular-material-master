
import { Component, OnInit } from '@angular/core';

import { NavigationStart, Router } from '@angular/router';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    /**
   * Constructor of the class.
   *
   * @param {Router}              router
   * @param {SidenavService}      sidenavService
   */
  public constructor(
    private router: Router,
    private sidenavService: SidenavService
  ) { }


  public ngOnInit(): void {

    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          this.sidenavService.close().then(() => { });
        }
      });
  }
}
