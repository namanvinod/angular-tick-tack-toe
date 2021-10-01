import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.css']
})
export class SquareComponent {
    @Input() squareValue!: string;
    @Output() squareAction = new EventEmitter();

    onSquareClick(event: any) {
        this.squareAction.emit(event);
    }
}