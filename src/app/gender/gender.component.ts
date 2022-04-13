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
        this.arr=this.gs.loadData()
    }

    removeData(itemR:any){
        this.arr=this.arr.filter(item=>item.name != itemR)
        this.gs.saveData(this.arr)
    }

    trovaGenere(){

        this.gs.getData(this.nome).subscribe({
            next:(dato:any)=>{
                if((dato.gender==null || this.nome==""))this.error="Nome non trovato"
                else{
                this.error="Trovato"
                this.scheda=dato;
                this.arr.push(this.scheda)
                this.gs.saveData(this.arr);
                }
            },
            error:(err:any)=>{
                
            }
        });
        
    }
}