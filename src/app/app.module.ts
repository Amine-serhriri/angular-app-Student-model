import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewEtudiantComponent } from './new-etudiant/new-etudiant.component';
import { EtudiantEditComponent } from './etudiant-edit/etudiant-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListEtudiantComponent,
    NewEtudiantComponent,
    EtudiantEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
