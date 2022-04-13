import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class GenderService{
    
    constructor(private http:HttpClient){}

    saveData(names:any){
        localStorage.setItem("names", JSON.stringify(names));
    }
    loadData(){
        // JSON.parse(local)
        let scheda:any = [{
            name:"",
            gender:"",
            probability:"",
            count:""
        }]
        let local=localStorage.getItem("names")
        return (local)?JSON.parse(local):scheda;
    }

    getData(nome:string):Observable<any>{
        let url="https://api.genderize.io?name="+nome
        return this.http.get<any>(url);
    }
}