import { Note } from '../class/Note';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable() // Ce service pourra s'injecter dans un constructeur
export class NotesService {

    private url: string = 'http://localhost/__Ecole%20numerique__/__ELEVES__/Angular/angularapi/fakeapi.php';

    constructor(private http: Http) {}

    getAllNotes(): Promise<any> {

        return this.http.get(this.url)
            .toPromise();

    }

}
