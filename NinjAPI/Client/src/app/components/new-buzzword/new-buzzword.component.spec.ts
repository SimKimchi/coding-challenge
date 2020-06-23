import { TestBed, async } from '@angular/core/testing';
import { NewBuzzwordComponent } from './new-buzzword.component';

describe('NewBuzzwordComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewBuzzwordComponent],
    }).compileComponents();
  }));

  it('should have its formcontrol properly initialized.', () => {
    // Arrange
    const fixture = TestBed.createComponent(NewBuzzwordComponent);
    const app = fixture.componentInstance;

    // Act
    app.ngOnInit();
    fixture.detectChanges();

    // Assert
    expect(app.buzzwordInput).not.toBeNull();
    expect(app.buzzwordInput.value).toBe('');
    expect(app.buzzwordInput.valid).toBeFalse();
  });

  it('should have its formcontrol invalid when it is touched and empty.', () => {
    // Arrange
    const fixture = TestBed.createComponent(NewBuzzwordComponent);
    const app = fixture.componentInstance;
    const compile = fixture.nativeElement;

    app.ngOnInit();
    fixture.detectChanges();

    // Act
    app.buzzwordInput.setValue('');
    fixture.detectChanges();

    // Assert
    expect(app.buzzwordInput.valid).toBeFalse();
    expect(app.buzzwordInput.hasError('required')).toBeTrue();
    expect(app.buzzwordInput.hasError('duplicateBuzzword')).toBeFalse();
    expect(compile.querySelector('mat-error').textContent).toContain(
      'Type something!'
    );
  });

  it('should have its formcontrol invalid when it contains a duplicate buzzword.', () => {
    // Arrange
    const fixture = TestBed.createComponent(NewBuzzwordComponent);
    const app = fixture.componentInstance;
    const compile = fixture.nativeElement;

    app.ngOnInit();
    app.buzzwords = ['java'];
    fixture.detectChanges();

    // Act
    app.buzzwordInput.setValue('java');
    fixture.detectChanges();

    // Assert
    expect(app.buzzwordInput.valid).toBeFalse();
    expect(app.buzzwordInput.hasError('required')).toBeFalse();
    expect(app.buzzwordInput.hasError('duplicateBuzzword')).toBeTrue();
    expect(compile.querySelector('mat-error').textContent).toContain(
      'Not that one again!'
    );
  });

  it('should have its formcontrol valid when it contains a unique buzzword.', () => {
    // Arrange
    const fixture = TestBed.createComponent(NewBuzzwordComponent);
    const app = fixture.componentInstance;
    const compile = fixture.nativeElement;

    app.ngOnInit();
    app.buzzwords = ['java'];
    fixture.detectChanges();

    // Act
    app.buzzwordInput.setValue('python');
    fixture.detectChanges();

    // Assert
    expect(app.buzzwordInput.valid).toBeTrue();
    expect(compile.querySelector('mat-error')).toBeNull();
  });

  it('should not add a buzzword when the input is invalid.', () => {
    // Arrange
    const fixture = TestBed.createComponent(NewBuzzwordComponent);
    const app = fixture.componentInstance;

    app.ngOnInit();
    app.buzzwords = ['java'];
    fixture.detectChanges();
    app.buzzwordInput.setValue('java');
    fixture.detectChanges();

    // Act
    app.addBuzzword();

    // Assert
    expect(app.buzzwords.length).toBe(1);
  });

  it('should add a buzzword when the input is valid.', () => {
    // Arrange
    const fixture = TestBed.createComponent(NewBuzzwordComponent);
    const app = fixture.componentInstance;

    app.ngOnInit();
    app.buzzwords = ['java'];
    fixture.detectChanges();
    app.buzzwordInput.setValue('python');
    fixture.detectChanges();

    // Act
    app.addBuzzword();

    // Assert
    expect(app.buzzwords.length).toBe(2);
  });

  it('should have a button with a customizable text.', () => {
    // Arrange
    const fixture = TestBed.createComponent(NewBuzzwordComponent);
    const app = fixture.componentInstance;
    const compile = fixture.nativeElement;

    app.ngOnInit();

    // Act
    app.addBtnMsg = 'Test';
    fixture.detectChanges();

    // Assert
    expect(compile.querySelector('button').textContent).toContain('Test');
  });
});
