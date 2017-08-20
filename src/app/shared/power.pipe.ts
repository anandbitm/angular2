import { Pipe,PipeTransform } from "@angular/core";
//{{ 2 | power}}
//{{ 2 | power:3}}
@Pipe({
   name:'power'
})
export class PowerPipe implements PipeTransform{

    transform(value:number,exponent:number=1){
      return Math.pow(value,exponent);
    }
}