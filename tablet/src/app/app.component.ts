import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import {logoPage } from '../pages/logo/logo';
import {RegisterPage } from '../pages/register/register';
import {SignUpPage } from '../pages/signup/signup';
import {loginPage } from '../pages/login/login';
import {ActivationPage } from '../pages/activation/activation';
import { help } from '../pages/help/help';
import { account } from '../pages/account/account';
import { setting } from '../pages/setting/setting';
import {floorStart } from '../pages/floor-start/floor-start';
import {floorNotification } from '../pages/floor-notification/floor-notification';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = logoPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: logoPage },
      { title: 'Floor', component: floorStart },
      { title: 'Account', component: account },
      {title:'Floor Notification', component:floorNotification},    
      { title: 'help', component: help },
      { title: 'Setting', component: setting }


    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
