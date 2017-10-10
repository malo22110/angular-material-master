import { SidenavService } from './shared/layout/sidenav/sidenav.service';
import { Component,  ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'app';
  @ViewChild('sidenav') public sidenav: MatSidenav;
  constructor(private sidenavService: SidenavService) {
    sidenavService.setSidenav(this.sidenav);
  }
}
