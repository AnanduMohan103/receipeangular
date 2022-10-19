import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddreceipeComponent } from './addreceipe/addreceipe.component';
import { FormsModule } from '@angular/forms';
import { ViewreceipeComponent } from './viewreceipe/viewreceipe.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {
    path:"",component:NavbarComponent
  },
  {
    path:"add",component:AddreceipeComponent
  },
  {
    path:"view",component:ViewreceipeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddreceipeComponent,
    ViewreceipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
