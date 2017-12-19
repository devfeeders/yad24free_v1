import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AuthProvider } from '../../providers/auth/auth';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  
    constructor(private authProvider: AuthProvider,
      private googlePlus: GooglePlus,
      private afAuth: AngularFireAuth,
      public navCtrl: NavController, public navParams: NavParams,) {
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
      this.authProvider.getFirebaseAuthStatus().subscribe( data => {
        console.log("data: " + JSON.stringify(data));
        if(data && data.uid){
          this.navCtrl.setRoot(HomePage);
        }
      });    
    }
  
    login(user: User){
      if(!user.email && !user.password){
        console.log("email or password are undefined!!");
        return;
      }
  
      this.authProvider.firebaseLoginWithEmailAndPass(user.email,user.password)
      .then((response) => {
        console.log("response: " + JSON.stringify(response));
        console.log("uid: " + response.uid);
        this.navCtrl.setRoot(HomePage);
      },
      (error) => {
        console.log("error: " + error);
      });
    }

    loginWithGoogle(){
      this.authProvider.firebaseLoginWithGoogle()
      .then( res =>{
        console.log("loged in successfully "+JSON.stringify(res));
        //this.navCtrl.setRoot(HomePage);
        // console.log("token: " + res.idToken);
        // 
        this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
         .then(
          (response) => { 
                   console.log("logged in with google");
                   this.navCtrl.setRoot(HomePage);
          },
          (error) => { console.log("failed to login with google " + error); }
        )
      }, (error) =>{
        console.log("firebaseLoginWithGoogle: googlePlus fialed to login, error: "+ error);
      });
    }

    // loginWithGoogle(){
    //   this.authProvider.firebaseLoginWithGoogle()
    //   .then(
    //     (response) => { 
    //       console.log("logged in with google");
    //       this.navCtrl.setRoot(HomePage);
    //      },
    //     (error) => { console.log("failed to login with google"); }
    //   )
    // }
  
    goToRegisterPage(){
      this.navCtrl.push(RegisterPage);
    }

}
