import { Component, OnInit } from '@angular/core';
import {EtudiantService} from "../service/etudiant.service";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {Etudiant} from "../Model/Etudiant.model";
import {AppDataState, DataStateEnum} from "../state/etudiant.state";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
  etudiant$: Observable<AppDataState<Etudiant[]>> |null=null ;
  readonly dataStateEnum=DataStateEnum
  searchEtudiant: any;


  constructor(public service: EtudiantService,
              private fb:FormBuilder,
              private route:Router) {
  }

  ngOnInit(): void {
    this.searchEtudiant=this.fb.group({
      name:this.fb.control(null)
    })

  }

  ongetAllEtudiant() {
    this.etudiant$=this.service.getAllEtudiant().pipe(
      map(data=>({dataState : DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    )
  }

  onGetSelectedEtudiant() {
    this.etudiant$=this.service.getSelectedEtudiant().pipe(
      map(data=>({dataState : DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    )
  }

  handleSearchEtudiant() {
    let data =this.searchEtudiant.value.name
    this.etudiant$=this.service.getSearchEtudiant(data).pipe(
      map(data=>({dataState : DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    )
  }

  onSelect(e: Etudiant) {
  this.service.select(e).subscribe(data=>{
    e.selected=data.selected
  })
  }

  onDeleteEtudiant(e: Etudiant) {
    let v =confirm("etes vous sur de vouloir supprimer")
    if(v==true){
      this.service.DeleteEtudiant(e).subscribe(data=>{
        this.ongetAllEtudiant()
      })
    }

  }

  onGetNewEtudiant() {
    this.route.navigateByUrl("/newEtudiant")
  }

  onEditEtudiant(e: Etudiant) {
    this.route.navigateByUrl("/edit-Etudiant/"+e.id)
  }
}
