import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
//import { AngularFireDatabase  } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  items: Observable<any[]>;
  constructor(
    afStorage: AngularFirestore
    ) {
    let ref = afStorage.collection<Int16Array>('prova');
     
    // let url = ref.getDownloadURL();
      console.log("mamma:"+ ref.toString() );
  }


  

}
