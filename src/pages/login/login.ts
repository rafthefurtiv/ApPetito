import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../../pages/home/home';
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
	loginError: string;


  credentials: any = {"email":"", "password":""};

  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     public fb: FormBuilder,
     private auth: AuthServiceProvider,
     public menu: MenuController
    ) {


      this.menu.enable(false);

		this.loginForm = this.fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  logIn(){

    let data = this.loginForm.value;
    
    if (!data.email) {
			return;
    }

		let credentials = {
			email: data.email,
			password: data.password
		};

		this.auth.signInWithEmail(credentials)
			.then(
				() => {this.menu.enable(true); this.navCtrl.setRoot(HomePage); },
				error => this.loginError = error.message
			);

    console.log("User " + data.email + " logged In.");
  }

}
