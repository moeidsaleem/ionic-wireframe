import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { floor } from '../floor/floor';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-test-ionic',
  templateUrl: 'floor-notification.html'
})
export class floorNotification {
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {

  }
   itemTapped(event,item) {
    this.navCtrl.push(floor);
}



 showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }



}
