import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'signup.html'
})
export class SignUpPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
   itemTapped(event,item) {
    this.navCtrl.push(RegisterPage);
}
 user = {}
 
}
