import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  navCtrl: NavController;
  
  constructor(public app: App,private afAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
    this.navCtrl = app.getActiveNav();
  }
  
  firebaseRegisterWithEmailAndPass(email: string, pass: string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,pass);
  }

  async firebaseLoginWithEmailAndPass(email: string, pass: string){
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(email,pass);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
    
  }

  firebaseLoginWithGoogle(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  getFirebaseAuthStatus(){
    return this.afAuth.authState;
  }

  async firebaseLogout(){
    try {
      return this.afAuth.auth.signOut();
    } catch (error) {
      return error;
    }    
  }

}
