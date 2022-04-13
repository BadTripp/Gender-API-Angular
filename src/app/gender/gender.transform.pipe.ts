import {Pipe,PipeTransform} from "@angular/core"


@Pipe({
    name:"ConvertiGenderPipe"
})

export class ConvertiGenderPipe implements PipeTransform{
    transform(value:String):String {
        (value=="male")?value="Maschile":"";
        (value=="female")?value="Femminile":""
        return value
    }
}