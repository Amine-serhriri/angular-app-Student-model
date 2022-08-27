import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EtudiantService} from "../service/etudiant.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-etudiant-edit',
  templateUrl: './etudiant-edit.component.html',
  styleUrls: ['./etudiant-edit.component.css']
})
export class EtudiantEditComponent implements OnInit {
  etudiantId:number;
  EtudiantFormGroup!: FormGroup;
  submitted: boolean=false;

  constructor(private activatedroute:ActivatedRoute,
              private  service:EtudiantService,
              private fb:FormBuilder) {
    this.etudiantId=this.activatedroute.snapshot.params['id']
  }

  ngOnInit(): void {
    this.service.getEtudiant(this.etudiantId).subscribe(etudiant=>{
      this.EtudiantFormGroup=this.fb.group({
        id:[etudiant.id,Validators.required],
        name:[etudiant.name,Validators.required],
        email:[etudiant.email,Validators.required],
        filiere:[etudiant.filiere,Validators.required],
        selected:[etudiant.selected,Validators.required],
      })
    })
  }

  handleUpdateEtudiant() {
    this.service.UpdateEtudiant(this.EtudiantFormGroup.value)
      .subscribe(data=>{
        alert("Succes Edit ")

      })
  }
}
