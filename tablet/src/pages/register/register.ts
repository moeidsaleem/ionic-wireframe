import { Component } from '@angular/core';
import {  ActivationPage} from '../activation/activation';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   

  }

    itemTapped(event) {
    this.navCtrl.push(ActivationPage);
}
}
