import {Pipe,PipeTransform} from "@angular/core"


@Pipe({
    name:"PrimaMaiuscola"
})

export class PrimaMaiuscola implements PipeTransform{
    transform(value:String):String {
        
        
        return value.replace(value.charAt(0),value.charAt(0).toUpperCase())
    }
}