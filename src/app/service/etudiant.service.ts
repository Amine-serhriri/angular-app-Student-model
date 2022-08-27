import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Etudiant} from "../Model/Etudiant.model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http:HttpClient) { }

    getAllEtudiant():Observable<Etudiant[]>{
    let host=environment.host
     return this.http.get<Etudiant[]>(host+"/etudiant");
    }

  getSelectedEtudiant():Observable<Etudiant[]>{
    let host=environment.host
    return this.http.get<Etudiant[]>(host+"/etudiant?selected=true");
  }
  getSearchEtudiant(keyword:string):Observable<Etudiant[]>{
    let host=environment.host
    return this.http.get<Etudiant[]>(host+"/etudiant?name_like="+keyword);
  }
  select(etudiant:Etudiant):Observable<Etudiant>{
    let host=environment.host
    etudiant.selected=!etudiant.selected
    return this.http.put<Etudiant>(host+"/etudiant/"+etudiant.id,etudiant);
  }
  DeleteEtudiant(etudiant:Etudiant):Observable<void>{
    let host=environment.host
    return this.http.delete<void>(host+"/etudiant/"+etudiant.id);
  }
  save(etudiant:Etudiant):Observable<Etudiant>{
    let host=environment.host
    return this.http.post<Etudiant>(host+"/etudiant/",etudiant);
  }
  getEtudiant(id:number):Observable<Etudiant>{
    let host=environment.host
    return this.http.get<Etudiant>(host+"/etudiant/"+id);
  }
  UpdateEtudiant(etudiant:Etudiant):Observable<Etudiant>{
    let host=environment.host
    return this.http.put<Etudiant>(host+"/etudiant/"+etudiant.id,etudiant);
  }
}
