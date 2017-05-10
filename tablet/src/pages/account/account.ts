import { Component } from '@angular/core';
import {  ActivationPage} from '../activation/activation';
import { NavController, NavParams } from 'ionic-angular';
import {  password } from '../password/password';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'account.html'
})
export class account {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   

  }

    itemTapped(event) {
    this.navCtrl.push(ActivationPage);
}
 itemTappedPassword(event) {
    this.navCtrl.push(password);
}
}
