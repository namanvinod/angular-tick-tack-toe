import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BoardComponent } from '../board/board.component';
import { SquareComponent } from '../square/square.component';
import { GameComponent } from './game.component';

describe('GameComponent', () => {
    let fixture: ComponentFixture<any>;
    
    beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        GameComponent,
        BoardComponent,
        SquareComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GameComponent);
});

  it('should render', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should render game container div`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.game-container')).not.toBe(null);
  });

  it(`should render game container div with text "Current Player: X"`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.game-container')?.textContent?.trim()).toBe('Current Player: X');
  });

  it(`should render Board component`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('board')).not.toBe(null);
  });
});