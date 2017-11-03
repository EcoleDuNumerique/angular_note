import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../class/Note';

@Component({
    selector: 'app-note',
    template: `
        <span (click)="parentRemove()" >X</span>
        <h4> {{ thenote.title }} </h4>
        <p> {{ thenote.content }} </p>
        <h6><i> {{ thenote.date | date:'dd-MM-yyyy' }} </i></h6>
    `,
    styleUrls: ['../views/styles/app.component.css']
})
export class NoteComponent {

    @Input() // Je demande a cette variable d'être une ENTREE dans le selector
    public thenote: Note;

    @Input()
    public index: number;

    @Output()
    public event: EventEmitter<number> = new EventEmitter<number>();

    parentRemove() {
        this.event.emit( this.index );
    }

}
