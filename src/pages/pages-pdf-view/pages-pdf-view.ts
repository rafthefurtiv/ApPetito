import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

/**
 * Generated class for the PagesPdfViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'pages-pdf-view',
  templateUrl: 'pages-pdf-view.html',
})
export class PagesPdfViewPage {

  public provaa = '<embed src="https://firebasestorage.googleapis.com/v0/b/rosotta-delivery.appspot.com/o/rafthefurtiv%40gmail.com.pdf?alt=media&token=7eb3efa8-ab3e-4d36-8f8f-bd4ab9d27126" type="application/pdf" width="100%" height="600px" />';
  public UrlPdf2 = "https://firebasestorage.googleapis.com/v0/b/rosotta-delivery.appspot.com/o/rafthefurtiv%40gmail.com.pdf?alt=media&token=7eb3efa8-ab3e-4d36-8f8f-bd4ab9d27126";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public sanitizer: DomSanitizer
    ) {
  
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesPdfViewPage');
  }


  pdfURL(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.UrlPdf2);
    //return this.UrlPdf2;
  }



}
