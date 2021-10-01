import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SquareComponent } from './square.component';

describe('SquareComponent', () => {
    let fixture: ComponentFixture<any>;
    
    beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SquareComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SquareComponent);
});

  it('should render', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render only one square btn', () => {
    fixture.detectChanges();
    const htmlElement = fixture.nativeElement as HTMLElement;
    expect(htmlElement.querySelector('.square')).not.toBe(null);
    expect(htmlElement.querySelectorAll('.square').length).toBe(1);
  });

  it('should render square btn with no text', () => {
    fixture.detectChanges();
    const htmlElement = fixture.nativeElement as HTMLElement;
    expect(htmlElement.querySelector('.square')?.textContent?.trim()).toBe('');
  });

  it('should display prop value as square text', () => {
    const component = fixture.componentInstance;
    component.squareValue = 'X';
    // This is needed to detect the input changed in above line
    fixture.detectChanges();
    const htmlElement = fixture.nativeElement as HTMLElement;
    expect(htmlElement.querySelector('.square')?.textContent?.trim()).toBe('X');
  });

  it('should trigger event on square click', () => {
    const component = new SquareComponent();
    let isEventTriggered = false;
    component.squareAction.subscribe((_: any)=> {
        isEventTriggered = true;
    });
    component.onSquareClick(null);
    
    expect(isEventTriggered).toBeTruthy();
  });
});