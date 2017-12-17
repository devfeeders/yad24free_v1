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
      'webclientId': '36554966660-j73urh1qcolsm5nvcjeo9b6cc0qmkp3t.apps.googleusercontent.com',
      'offline': true
    }).then( res =>{
      return firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken));
    }, (error) =>{
      console.log("firebaseLoginWithGoogle: googlePlus fialed to login, error: "+ error);
    })
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
