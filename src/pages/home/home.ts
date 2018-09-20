import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  prova;



  constructor(
    public navCtrl: NavController,
    public userService: UserServiceProvider
    ) {


    this.prova= "Ciaone";
    console.log('Hello Mammt Provider');

    var utenti = "db.collection('utenti')";


    console.log("Ut: " + utenti);

    
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SujetPage');
  }





}
