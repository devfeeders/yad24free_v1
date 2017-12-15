import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CatagoryPage } from '../pages/catagory/catagory';
import { ProductListPage } from '../pages/catagory/product-list/product-list';
import { ProductItemComponent } from '../components/product-item/product-item';
import { ProductListComponent } from '../components/product-list/product-list';
import { NewProductPage } from '../pages/new-product/new-product';
import { ProductProvider } from '../providers/product/product';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    CatagoryPage,
    ProductListPage,
    ProductItemComponent,
    ProductListComponent,
    NewProductPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    CatagoryPage,
    ProductListPage,
    ProductItemComponent,
    ProductListComponent,
    NewProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ProductProvider
  ]
})
export class AppModule {}
