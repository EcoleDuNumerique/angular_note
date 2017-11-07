import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../class/Note';

@Pipe({name: 'resume'})
export class ResumePipe implements PipeTransform {

    transform(note: Note): string {

        const resum_title: string = note.getTitle().substr(0, 3);
        const resum_desc: string = note.getContent().substr(0, 3);

        return resum_title + ':' + resum_desc;

    }

}
