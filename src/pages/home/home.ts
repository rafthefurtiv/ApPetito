import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


import { AngularFireStorage } from 'angularfire2/storage';
import {LoadingController} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   prova;
   UrlPdf: any = "";

   pdfEmbeded = "";


  constructor(
    public navCtrl: NavController,
    public storage: AngularFireStorage,
    public sanitizer: DomSanitizer,
    public loadingCtrl: LoadingController
    ) {

      //storage.storage.ref.toString();
      //console.log( "Storage Obj: " + storage.storage.ref("rafthefurtiv@gmail.com").getDownloadURL());
      
     // console.log( "Storage Obj2: " + storage.storage.ref("rafthefurtiv@gmail.com").getDownloadURL().then(url => console.log(url));
     this.UrlPdf = storage.storage.ref("/rafthefurtiv@gmail.com.pdf").getDownloadURL().then(function onSuccess(url) {
        console.log("URL: " + url);
        //this.UrlPdf = "d";

        //this.pdfEmbeded = '<embed src="'+this.UrlPdf+'" type="application/pdf" width="100%" height="600px" />';

       // return url.toString();

       return url;
      }).then(data =>{

        this.UrlPdf = data;
        this.pdfEmbeded = '<embed src="'+this.UrlPdf+'" type="application/pdf" width="100%" height="600px" />';
      }
      );

      //this.UrlPdf="fdfdfe";
      
      //console.log( "Storage: " + JSON.stringify(storage.storage.ref("rafthefurtiv@gmail.com").getDownloadURL()) );
      
     // console.log("Info: " + JSON.stringify(this.firebase.getInfo()));

    
  }


  ngOnInit() {
    //here also tried to call api
    this.UrlPdf = this.storage.storage.ref("/rafthefurtiv@gmail.com.pdf").getDownloadURL().then(function onSuccess(url) {
      console.log("URL: " + url);
      //this.UrlPdf = "d";

      //this.pdfEmbeded = '<embed src="'+this.UrlPdf+'" type="application/pdf" width="100%" height="600px" />';

     // return url.toString();

     return url;
    }).then(data =>{

      this.UrlPdf = data;
      //this.pdfEmbeded = '<embed src="'+this.UrlPdf+'" type="application/pdf" width="100%" height="600px" />';
    }
    );
      }


  pdfURL(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.UrlPdf);
    //return this.UrlPdf2;
  }


}
