export class Color {

    public red;
    public green;
    public blue;
    public alpha;

    constructor() {
        this.red    = 0;
        this.green  = 0;
        this.blue   = 0;
        this.alpha  = 1;
    }

    toString() {
        return 'rgba(' + this.red + ', ' + this.green + ', ' + this.blue + ', ' + this.alpha + ')';
    }

}
