import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'login.html'
})
export class loginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
   itemTapped(event,item) {
    //this.navCtrl.push(RegisterPage);
}
 user = {}
 
}
