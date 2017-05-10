import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { floorEdit } from '../floor-edit/floor-edit';


@Component({
  selector: 'page-test-ionic',
  templateUrl: 'floor-start.html'
})
export class floorStart {
 constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
   itemTapped(event,item) {
    this.navCtrl.push(floorEdit);
}
}
