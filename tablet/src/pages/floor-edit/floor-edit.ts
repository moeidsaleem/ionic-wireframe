import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { floor } from '../floor/floor';


@Component({
  selector: 'page-test-ionic',
  templateUrl: 'floor-edit.html'
})
export class floorEdit {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
   itemTapped(event,item) {
    this.navCtrl.push(floor);
}
}
