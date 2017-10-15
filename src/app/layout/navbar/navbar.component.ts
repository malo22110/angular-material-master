import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';
import { TranslateService } from '@ngx-translate/core';

import { SharedModule } from '../../shared/shared.module';
import { LocaleModel } from '../../shared/translation/';
import { NavbarComponentResolveInterface } from './interfaces/';

import { SidenavService } from '../sidenav/sidenav.service';
import { NavbarService } from './navbar.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public locales: Array<LocaleModel>;
  
  @Input()
  private title: string;
  
  /**
   * Constructor of the class.
   *
   * @param {ActivatedRoute}      activatedRoute
   * @param {LocalStorageService} localStorage
   * @param {TranslateService}    translateService
   * @param {SidenavService}      sidenavService
   */
  public constructor(
    private activatedRoute: ActivatedRoute,
    private localStorage: LocalStorageService,
    private translateService: TranslateService,
    private sidenavService: SidenavService,
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
  // Store locales from route resolve
    this.activatedRoute.data.subscribe((data: NavbarComponentResolveInterface) => {
      this.locales = data.locales;
    });
  }

   /**
   * Method to change current language.
   *
   * @param {LocaleModel} locale
   */
  public changeLocale(locale: LocaleModel): void {
    this.translateService.use(locale.code);
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
