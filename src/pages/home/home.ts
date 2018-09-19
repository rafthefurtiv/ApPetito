import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  prova;



  constructor(
    public navCtrl: NavController
    ) {
    this.prova= "Ciaone";


    
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SujetPage');
  }





}
