import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'game',
    styleUrls: ['./game.component.css'],
    templateUrl: './game.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {

}