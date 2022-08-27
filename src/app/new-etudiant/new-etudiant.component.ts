import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EtudiantService} from "../service/etudiant.service";

@Component({
  selector: 'app-new-etudiant',
  templateUrl: './new-etudiant.component.html',
  styleUrls: ['./new-etudiant.component.css']
})
export class NewEtudiantComponent implements OnInit {
  newEtudiant!: FormGroup;
  submitted: boolean=false;


  constructor(private fb:FormBuilder,
              private service:EtudiantService
  ) { }

  ngOnInit(): void {
    this.newEtudiant=this.fb.group({
      name:this.fb.control(null,[Validators.required]),
      email:this.fb.control(null,[Validators.email]),
      filiere:this.fb.control(null,[Validators.required]),
      selected:this.fb.control(true,[Validators.required])

    })
  }

  handleSaveEtudiant() {
    this.submitted=true
    if(this.newEtudiant.invalid)return;
    let etudiant=this.newEtudiant.value
    this.service.save(etudiant).subscribe(data=>{
     alert("sucess saving etudinat")
    })
  }
}
