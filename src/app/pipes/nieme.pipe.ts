import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'nieme'})
export class NiemePipe implements PipeTransform {

    transform(value: number, name: string): string {

        let endStr: string = '';

        switch ( value ) {
            case 0:
                endStr = 'Premier élément ' + name;
                break;
            case 1 :
                endStr = 'Second élément ' + name;
                break;
            default :
                endStr = (value + 1) + 'ième élément ' + name;
                break;
        }

        return endStr;

    }

}
