import { Component } from '@angular/core';
import { Note } from '../class/Note';
import { Color } from '../class/Color';
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

    public search: string = '';

    public color: Color = new Color();

    public selected_note: Note;

    constructor( private notesservice: NotesService ) {
        this.getNotes();
    }

    getNotes() {
        this.notesservice.getAllNotes().then( (data) => {

            for ( const dnote of data.json() ){
                this.addNote( dnote.title, dnote.content, dnote.date );
            }

        } );
    }

    addNote( title: string, content: string, datestr: string ) {
        const note: Note = new Note(title, content);
        note.setDate( new Date(datestr) );
        this.notes.push( note );
    }

    remove( i: number ) {
        this.notes.splice( i, 1 );
    }

}
