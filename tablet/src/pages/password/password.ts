import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {account} from '../account/account';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'password.html'
})
export class password {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
   itemTapped(event,item) {
    this.navCtrl.push(account);
}


}
