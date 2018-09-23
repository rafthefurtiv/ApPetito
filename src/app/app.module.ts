import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PagesPdfViewPage } from '../pages/pages-pdf-view/pages-pdf-view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DocumentViewer } from '@ionic-native/document-viewer';


import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';

import { environment } from '../environment/environment';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


import { UserServiceProvider } from '../providers/user-service/user-service';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PagesPdfViewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpModule,
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PagesPdfViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DocumentViewer,
    UserServiceProvider,
    AngularFirestore,
    AngularFireStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}