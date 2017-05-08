import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../signup/signup';

@Component({
  selector: 'page-logo-ionic',
  templateUrl: 'logo.html'
})
export class logoPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  itemTapped(event, item) {
    this.navCtrl.push(SignUpPage);
}


}
