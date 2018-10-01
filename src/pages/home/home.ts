import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireStorage } from 'angularfire2/storage';


import { RequestOptions } from '@angular/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/Rx';
import { resolveDefinition } from '@angular/core/src/view/util';
import { Http, Headers } from '@angular/http';


import { AngularFireAuth } from 'angularfire2/auth';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


export class user {
  nome: string;
  cognome: string;
  mail: string;
}



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  prova;
  data;
  dataFormatted;
  userDoc : AngularFireList<user>;  
  posts: any;
  public localMail: string ="";
  errorMessage="";


  pdfUrl="";
  loaded= false;

  constructor(
    public navCtrl: NavController,
    fireStore: AngularFireDatabase,
    public http: Http,
    public stModule: AngularFireStorage,
    public authService: AuthServiceProvider,
    public sanitizer: DomSanitizer,
    public storageService: StorageServiceProvider
    ) {

/*
      //let options = new RequestOptions({ headers: "", params: "" });
      //let localMail = "rafthefurtiv@gmail.com";

      this.localMail = authService.getUserMail();

      let headers = new Headers({ 'X-Parse-Application-Id': 'Qk4C6ALlWpFfgtJS5GvQ0QjgBAv0adzEWmOazZpd', 
      'X-Parse-Master-Key':'fyQxepDJK6NZOjS6lKRho2lxP8S8F4UF6IAZSDjT',
      'Content-Type': 'application/json'
    });
      let options = new RequestOptions({ headers: headers });
      
      //let ut3 = this.http.get('https://rosotta-delivery.firebaseio.com/utenti/'+ localMail.replace('.', '') +'.json', options).subscribe((res) => {
        let ut3 = this.http.get('https://parseapi.back4app.com/classes/utenti', options).subscribe((res) => {

        this.data = res.json().results;
        console.log("Stringa: "+this.data.length);


        // DEBUG
      this.data.forEach(element => {
        console.log("Cognome: "+ element.cognome);

      });


      console.log("Ref: "+this.stModule.ref("files/"+ this.localMail));

      // USING FIREBASE
     // this.data = res._body;
        //this.dataFormatted = JSON.parse(this.data);
        //let itemsRef: AngularFireList<any>;
        //itemsRef = JSON.parse(this.data);

       // this.readData(); // DEBUG

      });

    */
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SujetPage');
  }


  readData(){
    console.log("Data: " + this.dataFormatted.nome);
  }

  provas(){
    console.log("Email: " + this.localMail);
  }


  ngOnInit() {
    this.loaded = false;
    this.storageService.getUrlStorage().then(
      data => {
        this.pdfUrl = data;
        this.loaded = true;
      }
    ).catch(
      (error:any) => {
        console.log(error);
        this.errorMessage = "File non disponibile";
      }
  );
  }

  pdfURL(){

       return this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
  }



/*
  Next, add this constant function after the Class body for converting Firebase response to an array.

  export const snapshotToArray = snapshot => {
      let returnArr = [];
  
      snapshot.forEach(childSnapshot => {
          let item = childSnapshot.val();
          item.key = childSnapshot.key;
          returnArr.push(item);
      });
  
      return returnArr;
  };
*/


}
