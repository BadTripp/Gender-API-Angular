import { Component } from "@angular/core";
import { GenderService } from "./gender.service";

@Component({
    selector:"<app-gender>",
    templateUrl:"./gender.component.html"
})

export class GenderComponent{
    titolo:string ="Trova il genere";
    nome:string=""
    scheda:any = {}
    arr :any[]=[];
    error:any;
    
    constructor(private gs:GenderService){
        console.log(this.arr)
        this.arr=this.gs.loadData()
    }
    
    trovaGenere(){
        this.gs.getData(this.nome).subscribe({
            next:(dato:any)=>{
                this.scheda=dato;
                this.arr.push(this.scheda)
                this.gs.saveData(this.arr);
            },
            error:(err:any)=>{
                this.error=err;
            }
        });
        
    }
}