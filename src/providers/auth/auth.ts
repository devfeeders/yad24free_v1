import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { GooglePlus } from '@ionic-native/google-plus';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  navCtrl: NavController;
  
  constructor(public app: App,
    private googlePlus: GooglePlus,
    private afAuth: AngularFireAuth) {
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

  async firebaseLoginWithGoogle(){
    
    return this.googlePlus.login({
      'webClientId': '159558064361-eklqsbj4eesuahmm02ltav9r8n4d0m21.apps.googleusercontent.com',
      'offline': true
    });
    //return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  getFirebaseCurrentUser(){
    return firebase.auth().currentUser;
  }

  getFirebaseAuthStatus(){
   // return firebase.auth().currentUser;
    return this.afAuth.authState;
  }

  async firebaseLogout(){
    try {
      //return this.afAuth.auth.signOut();
      return firebase.auth().signOut();
    } catch (error) {
      return error;
    }    
  }

}
