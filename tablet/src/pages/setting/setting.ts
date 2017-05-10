import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { settingPercentage } from '../setting.percentage/setting.percentage';
import { settingFee } from '../setting.fee/setting.fee';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'setting.html'
})
export class setting {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
   itemTappedPercentage(event,item) {
    this.navCtrl.push(settingPercentage);
}
 itemTappedFee(event) {
    this.navCtrl.push(settingFee);
}



 
}
