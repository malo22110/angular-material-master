import { Component,  OnInit,  ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSidenav } from '@angular/material';
import { LocalStorageService } from 'ng2-webstorage';


import { SidenavService } from './layout/sidenav/sidenav.service';
import { NavbarService } from './layout/navbar/navbar.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NavbarService]
})



export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('sidenav') public sidenav: MatSidenav;


    /**
   * Constructor of the class.
   *
   * @param {TranslateService}    translate
   * @param {LocalStorageService} localStorage
   * @param {SidenavService}      sidenavService
   */
  constructor(
    private translate: TranslateService,
    private localStorage: LocalStorageService,
    private sidenavService: SidenavService) {
   // this language will be used as a fallback when a translation isn't found in the current language
   translate.setDefaultLang('fr');
       // the lang to use, if the lang isn't available, it will use the current loader to get them
       translate.use(this.localStorage.retrieve('language') || 'fr');
  }

  public ngOnInit(): void {
    // Store sidenav to service
    this.sidenavService
      .setSidenav(this.sidenav);
  }
}
