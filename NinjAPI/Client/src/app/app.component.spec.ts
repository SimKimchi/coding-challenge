import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app.', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Assert
    expect(app).toBeTruthy();
  });

  it(`should have an empty buzzword list.`, () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Assert
    expect(app.buzzwords).not.toBeNull();
    expect(app.buzzwords).toEqual([]);
  });

  it('should have its 4 child components on startup.', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement;

    // Assert
    expect(compiled.querySelector('app-new-buzzword')).not.toBeNull();
    expect(compiled.querySelector('app-buzzword-list')).not.toBeNull();
    expect(compiled.querySelector('app-ninja-name')).not.toBeNull();
    expect(compiled.querySelector('app-konami-code')).not.toBeNull();
  });

  it('should have "Add" as the button message on startup.', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Assert
    expect(app.addBtnMsg).toBe('Add');
  });

  it('should have "One more!" as the button message with 1 buzzword.', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.buzzwords.push('Java');

    // Act
    app.updateAddBtnMsg();

    // Assert
    expect(app.addBtnMsg).toBe('One more!');
  });

  it('should have "Ok ok." as the button message with 6 buzzwords.', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    for (let i = 0; i < 6; i++) {
      app.buzzwords.push('Java');
    }

    // Act
    app.updateAddBtnMsg();

    // Assert
    expect(app.addBtnMsg).toBe('Ok ok.');
  });

  it('should have "Uh oh..." as the button message with 11 buzzwords.', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    for (let i = 0; i < 11; i++) {
      app.buzzwords.push('Java');
    }

    // Act
    app.updateAddBtnMsg();

    // Assert
    expect(app.addBtnMsg).toBe('Uh oh...');
  });
});
