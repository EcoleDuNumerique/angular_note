import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../class/Note';

@Component({
    selector: 'app-note',
    template: `
        <span (click)="parentRemove()">X</span>
        <h4> {{ thenote.title }} </h4>
        <p> {{ thenote.content }} </p>
        <h6><i> {{ thenote.date | date:'dd-MM-yyyy' }} </i></h6>
    `,
    styleUrls: ['../views/styles/app.component.css']
})
export class NoteComponent {

    // la valeur des input est définie dans le parent !
    // (donc entrée de la valeur exterieure, on utilise donc @Input() )
    @Input()
    public thenote: Note;

    @Input()
    public index: number;

    // l'evennement 'event' est lancé sur le selecteur lui même pour être utilisé au niveau du parent
    // On fait donc ressortir une valeur au niveau du template parent, on utilise alors @Output
    @Output()
    public event: EventEmitter<number> = new EventEmitter();

    parentRemove() {
        this.event.emit( this.index );
    }

}
