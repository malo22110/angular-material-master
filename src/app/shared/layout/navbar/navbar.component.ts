import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SidenavService } from '../sidenav/sidenav.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public constructor() { }

  ngOnInit() {
  }

}

// this.sidenavService.setSidenav(this.sidenavComp.sidenav);

