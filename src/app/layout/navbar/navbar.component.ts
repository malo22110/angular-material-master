import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SidenavService } from '../sidenav/sidenav.service';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
/**
   * Constructor of the class.
   *
   * @param {ActivatedRoute}      activatedRoute
   * @param {SidenavService}      sidenavService
   */
  public constructor(
    private activatedRoute: ActivatedRoute,
    private sidenavService: SidenavService
  ) { }

  ngOnInit() {
  }


  /**
   * Method to toggle application sidenav.
   */
  public toggleSidenav() {
    this.sidenavService
      .toggle()
      .then(() => { });
  }
}
