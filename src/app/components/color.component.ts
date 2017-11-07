import { Component, EventEmitter, Output } from '@angular/core';
import { Color } from '../class/Color';

@Component({
    selector: 'app-color',
    template: `
    <label>R:</label><input type="range" min=0 max=255 [(ngModel)]="color.red" (ngModelChange)="setColorParent()" />
    <label>G:</label><input type="range" min=0 max=255 [(ngModel)]="color.green" (ngModelChange)="setColorParent()" />
    <label>B:</label><input type="range" min=0 max=255 [(ngModel)]="color.blue" (ngModelChange)="setColorParent()" />
    <div id="preview" [appBackground]="color.toString()" ></div>
    `,
    styles: [`#preview {
        width: 20px;
        height:20px;
        border: 1px solid black;
    }`]
})
export class ColorComponent {

    public color: Color = new Color();

    @Output() event: EventEmitter<Color> = new EventEmitter();

    setColorParent() {
        this.event.emit( this.color );
    }

}
