import { Component,  OnInit,  ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material';
import { SidenavService } from './layout/sidenav/sidenav.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('sidenav') public sidenav: MatSidenav;


    /**
   * Constructor of the class.
   *
   * @param {SidenavService}      sidenavService
   */
  constructor(private sidenavService: SidenavService) {
  }


  public ngOnInit(): void {
    // Store sidenav to service
    this.sidenavService
      .setSidenav(this.sidenav);
  }
}
