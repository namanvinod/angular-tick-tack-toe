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

  it(`should render square btn`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.square')).not.toBe(null);
  });

  it(`should render square btn with no text`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.square')?.textContent).toBe('');
  });
});