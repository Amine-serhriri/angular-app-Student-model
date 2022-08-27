import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {ListEtudiantComponent} from "./list-etudiant/list-etudiant.component";
import {NewEtudiantComponent} from "./new-etudiant/new-etudiant.component";
import {EtudiantEditComponent} from "./etudiant-edit/etudiant-edit.component";

const routes: Routes = [
  {path:"",component:NavbarComponent},
  {path:"List-Etudiant",component:ListEtudiantComponent},
  {path:"newEtudiant",component:NewEtudiantComponent},
  {path:"edit-Etudiant/:id",component:EtudiantEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
