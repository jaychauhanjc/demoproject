import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:'summary'
})

export class SummaryPipe implements PipeTransform{

    transform(value:string, limit:number){
        var newlimit= limit ? limit: 20
        return value.substring(0,newlimit) + '...'

    }
}