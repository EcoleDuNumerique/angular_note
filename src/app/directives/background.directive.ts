import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[appBackground]'
})
export class BackgroundDirective implements OnChanges {

    private element: HTMLElement;

    // tslint:disable-next-line:no-input-rename
    @Input('appBackground') bgcolor: string;

    constructor( el: ElementRef ) {
        this.element = el.nativeElement;
    }

    ngOnChanges(): void {
        this.element.style.backgroundColor = this.bgcolor;
    }

}
