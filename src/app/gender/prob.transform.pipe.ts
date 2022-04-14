import {Pipe,PipeTransform} from "@angular/core"


@Pipe({
    name:"ConvertiProb"
})

export class ConvertiProb implements PipeTransform{
    transform(value:any):any {
        

        return (value)?value*100+"%":"";
    }
}