import { Component } from "@angular/core";
import { ConvertitoreService } from "./convertitore.component.service";




@Component({
    selector:"<app-convertitore>",
    templateUrl:"./convertitore.component.html"
})

export class ConvertitoreComponent{
    euro=0;
    valori:any={};
    error:any;
    valoreBit:Number=0;
    conversioneM="";
    
    
    constructor(private conv:ConvertitoreService){
        
    }

    converti(){

        this.conv.getData().subscribe({
            next:(dato:any)=>{
                this.valori=dato.bpi.EUR;
                
                (this.conversioneM=="EUR")?this.valoreBit=this.euro/this.valori.rate_float:this.valoreBit=this.euro*this.valori.rate_float
                
            },
            error:(err:any)=>{
                
            }
        });
        
    }
}