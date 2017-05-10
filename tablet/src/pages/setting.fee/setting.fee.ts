import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { setting } from '../setting/setting';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'setting.fee.html'
})
export class settingFee {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
   itemTapped(event,item) {
    this.navCtrl.push(setting);
}

 
}
