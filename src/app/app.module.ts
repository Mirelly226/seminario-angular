import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {ItemComponent} from './item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {
}
