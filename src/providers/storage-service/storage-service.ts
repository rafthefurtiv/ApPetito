import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/*
  Generated class for the StorageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageServiceProvider {

  UrlPdf: any = "";


  constructor(public http: HttpClient, public storage: AngularFireStorage, public authService: AuthServiceProvider
  ) {
    console.log('Hello StorageServiceProvider Provider');
  }

  getUrlStorage(){

   let ret = this.storage.storage.ref("/"+ this.authService.getUserMail()+".pdf").getDownloadURL().then(function onSuccess(url) {
    console.log("URL: " + url);
    return url;
    }).then(data => {return data;});

    return ret;

  }


}
