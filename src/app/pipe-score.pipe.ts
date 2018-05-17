import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeScore'
})
export class PipeScorePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    if(value > 0){
      return `<span class="text-success h3" >+${value}</span>`;
    }
    else if(value == 0){
      return `<span class="text-dark h3" >${value}</span>`;
    }
    else{
      return `<span class="text-danger h3" >${value}</span>`;
    }
  }

}
