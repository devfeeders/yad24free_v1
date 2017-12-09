import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, action: string}>;
  action: string = "logout";

  constructor(public platform: Platform, 
    private authProvider: AuthProvider,
    public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, action: 'openPage' },
      { title: 'List', component: ListPage, action: 'openPage' },
      { title: 'Logout', component: ListPage, action: 'logout' }
    ];
  }

  initializeApp() {    
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authProvider.getFirebaseAuthStatus().subscribe( data => {
        console.log("data: " + JSON.stringify(data));
        if(data && data.uid){
          this.rootPage = HomePage;
        }else{
          this.nav.setRoot(LoginPage);
        }
      }); 
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
    this.authProvider.firebaseLogout()
    .then(response => {
      console.log("logout response: " + response);
    },
    error => {
      console.log("error: " + error);
    }
    );
  }

  runAction(item){
    console.log("item title: " + item.title );
    switch(item.action){
      case 'openPage':
        this.openPage(item);
        break;
      case 'Logout':
        this.logout();
        break;
      default:
        console.log("default");
        break;
    }
  }
}
