import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';

/**
 * Generated class for the PdfViewerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pdf-viewer',
  templateUrl: 'pdf-viewer.html',
})
export class PdfViewerPage {

  pdfUrl="";
  loaded= false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public sanitizer: DomSanitizer,
    public storageService: StorageServiceProvider
  ) {

    //this.pdfURL();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfViewerPage');
  }


  ngOnInit() {
    this.loaded = false;
    this.storageService.getUrlStorage().then(
      data => {
        this.pdfUrl = data;
        this.loaded = true;
      }
    );
  }

  pdfURL(){
       return this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
  }

}
