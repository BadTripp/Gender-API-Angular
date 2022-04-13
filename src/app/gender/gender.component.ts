import { Component } from "@angular/core";
import { GenderService } from "./gender.service";

@Component({
    selector:"<app-gender>",
    templateUrl:"./gender.component.html"
})

export class GenderComponent{
    titolo:string ="Trova il genere";
    nome:string=""
    scheda:any = {};
    error:any;
    constructor(private gs:GenderService){}

    trovaGenere(){
        this.gs.getData(this.nome).subscribe({
            next:(dato:any)=>{
                this.scheda=dato;
                console.log(this.scheda)
            },
            error:(err:any)=>{
                this.error=err;
            }
        });
        
    }
}