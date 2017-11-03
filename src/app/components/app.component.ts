import { Component, OnInit } from '@angular/core';
import { Note } from '../class/Note';
import * as $ from 'jquery';
import 'jqueryui';

@Component({
    selector: 'app-root',
    templateUrl: '../views/app.component.html',
    styleUrls: ['../views/styles/app.component.css'],
})
export class AppComponent implements OnInit {

    public displayForm: boolean = false;
    public notes: Note[] = [];

    public selected_note: Note;

    ngOnInit() {
        console.log( $('#datepicker') );
        $('#datepicker').datepicker();
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
