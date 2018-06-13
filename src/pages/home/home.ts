import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string='';

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  alert(title:string,message:string) {
    let alertBOx = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alertBOx.present();
  }

  loginuser(){
    if(/^[a-zA-Z0-9]+@/.test(this.username)){
         this.navCtrl.push(ChatPage,{
              username:this.username
         })
    }else{
      this.alert("error","invalid")
    }
  }

}
