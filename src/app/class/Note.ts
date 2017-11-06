export class Note {

    public title: string;
    public content: string;
    public date: Date;

    constructor( title: string, content: string ) {
        this.title = title;
        this.content = content;
        this.date = new Date();
    }

    getTitle(): string {
        return this.title;
    }

    getContent(): string {
        return this.content;
    }

    setDate( date: Date ) {
        this.date = date;
    }

}
