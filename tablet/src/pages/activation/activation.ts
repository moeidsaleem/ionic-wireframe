import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { loginPage } from '../login/login';

@Component({
  selector: 'page-logo-ionic',
  templateUrl: 'activation.html'
})
export class ActivationPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

   itemTapped(event) {
   this.navCtrl.push(loginPage);
}


}
