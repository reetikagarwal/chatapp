import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  username:string='';
  message:string='';
  s;
  messages:object[]=[];

  constructor(private db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    this.username=this.navParams.get('username');
    this.s=this.db.list('/chat').valueChanges().subscribe(data => {
      console.log(data)
     this.messages=data;
    })

  }
  sendmessage()
  {
    this.db.list('/chat').push({
      username:this.username,
      message:this.message,
    }).then(()=>{

    })


  }

  ionViewDidLoad() {
  
    console.log('ionViewDidLoad ChatPage');
  }

}
