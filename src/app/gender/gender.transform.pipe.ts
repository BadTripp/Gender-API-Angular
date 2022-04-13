import {Pipe,PipeTransform} from "@angular/core"


@Pipe({
    name:"ConvertiGenderPipe"
})

export class ConvertiGenderPipe implements PipeTransform{
    transform(value:String):String {
        return (value=="male")? "maschio":"femmina";
    }
}