import { TestBed, async } from '@angular/core/testing';
import { BuzzwordListComponent } from './buzzword-list.component';

describe('BuzzwordListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuzzwordListComponent],
    }).compileComponents();
  }));

  it('should have an empty list on startup', () => {
    // Arrange
    const fixture = TestBed.createComponent(BuzzwordListComponent);
    const compiled = fixture.nativeElement;

    // Assert
    expect(compiled.querySelector('mat-list-item')).toBeNull();
  });

  it(`should have two items for two buzzwords`, () => {
    // Arrange
    const fixture = TestBed.createComponent(BuzzwordListComponent);
    const compiled = fixture.nativeElement;
    const app = fixture.componentInstance;

    // Act
    app.buzzwords = ['java', 'python'];
    fixture.detectChanges();

    // Assert
    expect(compiled.querySelectorAll('mat-list-item').length).toBe(2);
  });

  it('should remove a buzzword from the list when the remove button is clicked.', () => {
    // Arrange
    const fixture = TestBed.createComponent(BuzzwordListComponent);
    const compiled = fixture.nativeElement;
    const app = fixture.componentInstance;

    app.buzzwords = ['java', 'python'];
    fixture.detectChanges();

    // Act
    app.removeBuzzword('java');
    fixture.detectChanges();

    // Assert
    expect(compiled.querySelectorAll('mat-list-item').length).toBe(1);
  });
});
