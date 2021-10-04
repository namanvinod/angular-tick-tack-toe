import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareComponent } from '../square/square.component';
import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardComponent, SquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 3 board rows', () => {
    fixture.detectChanges();
    const htmlElement = fixture.nativeElement as HTMLElement;
    expect(htmlElement.querySelector('.board-row')).not.toBe(null);
    expect(htmlElement.querySelectorAll('.board-row').length).toBe(3);
  });

  it('should render 3 squares in first row', () => {
    fixture.detectChanges();
    const htmlElement = fixture.nativeElement as HTMLElement;
    expect(htmlElement.querySelector('.board-row')?.querySelector('square')).not.toBe(null);
    expect(htmlElement.querySelector('.board-row')?.querySelectorAll('square').length).toBe(3);
  });

  it('should render 3 squares in second row', () => {
    fixture.detectChanges();
    const htmlElement = fixture.nativeElement as HTMLElement;
    expect(htmlElement.querySelectorAll('.board-row')[1]?.querySelector('square')).not.toBe(null);
    expect(htmlElement.querySelectorAll('.board-row')[1]?.querySelectorAll('square').length).toBe(3);
  });

  it('should render 3 squares in third row', () => {
    fixture.detectChanges();
    const htmlElement = fixture.nativeElement as HTMLElement;
    expect(htmlElement.querySelectorAll('.board-row')[2]?.querySelector('square')).not.toBe(null);
    expect(htmlElement.querySelectorAll('.board-row')[2]?.querySelectorAll('square').length).toBe(3);
  });
});