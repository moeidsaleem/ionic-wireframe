import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { floorEdit } from '../floor-edit/floor-edit';


@Component({
  selector: 'page-test-ionic',
  templateUrl: 'floor.html'
})
export class floor {
 constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
   itemTapped(event,item) {
 //   this.navCtrl.push(floorEdit);
}
}
