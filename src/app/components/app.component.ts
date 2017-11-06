import { Component } from '@angular/core';
import { Note } from '../class/Note';
import { NotesService } from '../services/notes.service';

@Component({
    selector: 'app-root',
    templateUrl: '../views/app.component.html',
    styleUrls: ['../views/styles/app.component.css'],
    providers: [NotesService] // On défini la liste des services à injecter dans le constructeur
})
export class AppComponent {

    public displayForm: boolean = false;
    public notes: Note[] = [];

    public selected_note: Note;

    constructor( private notesservice: NotesService ) {
        this.getNotes();
    }

    getNotes() {
        this.notesservice.getAllNotes().then( (data) => {
            console.log( data );
        } );
    }

    addNote( title: string, content: string ) {
        this.notes.push(
            new Note(title, content)
        );
    }

    remove( i: number ) {
        this.notes.splice( i, 1 );
    }

}
