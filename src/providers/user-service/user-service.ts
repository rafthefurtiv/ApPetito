import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase  } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';


/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

public listaa;

  items: Observable<any[]>;
  constructor(
    public db: AngularFireDatabase
    ) {
    let ref = this.db.list('/prova2/');
    this.listaa = this.db.list('/utenti/');
    // let url = ref.getDownloadURL();

    for (let entry of this.listaa) {
      console.log("mamma:"+ entry);
  }
    // let url = ref.getDownloadURL();
//
      console.log("mamma:"+ this.listaa);
      return this.listaa;
  }


  getLista(){

    let ref = this.db.list('/prova2/');
    this.listaa = this.db.list('/utenti/raf');
    // let url = ref.getDownloadURL();

    for (let entry of this.listaa) {
      console.log("mamma:"+ entry);
  }
  
//
      console.log("mamma:"+ ref);
      return this.listaa;
  }


  

}
