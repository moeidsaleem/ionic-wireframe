import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { logoPage } from '../pages/logo/logo';
import { SignUpPage } from '../pages/signup/signup';
import { RegisterPage } from '../pages/register/register';
import { ActivationPage } from '../pages/activation/activation';
import { loginPage } from '../pages/login/login';
import { floorStart } from '../pages/floor-start/floor-start';
import { floorEdit } from '../pages/floor-edit/floor-edit';
import { floorNotification } from '../pages/floor-notification/floor-notification';
import { floor } from '../pages/floor/floor';
import { setting } from '../pages/setting/setting';
import { settingPercentage } from '../pages/setting.percentage/setting.percentage';
import { settingFee } from '../pages/setting.fee/setting.fee';
import { help } from '../pages/help/help';
import { account } from '../pages/account/account';
import { password } from '../pages/password/password';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    logoPage,
    SignUpPage,
    RegisterPage,
    ActivationPage,
    loginPage,
    floorStart,
    floorEdit,
    floor,
    setting,
    settingPercentage,
    settingFee,
    help,
    account,
    password,
    floorNotification

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    logoPage,
    SignUpPage,
    RegisterPage,
    ActivationPage,
    loginPage,
    floorStart,
    floorEdit,
    floor,
     setting,
    settingPercentage,
    settingFee,
    help,
    account,
    password,
    floorNotification
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
