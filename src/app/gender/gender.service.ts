import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class GenderService{
    
    constructor(private http:HttpClient){}

    getData(nome:string):Observable<any>{
        let url="https://api.genderize.io?name="+nome
        return this.http.get<any>(url);
    }
}