import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquareComponent {
    @Input() squareIndex!: number;
    @Input() squareValue!: string;
    @Output() squareAction = new EventEmitter();

    onSquareClick(event: any) {
        this.squareAction.emit(this.squareIndex);
    }
}