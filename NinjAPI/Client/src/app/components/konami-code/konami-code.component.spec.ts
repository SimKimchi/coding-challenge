import { TestBed, async } from '@angular/core/testing';
import { KonamiCodeComponent } from './konami-code.component';

describe('KonamiCodeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KonamiCodeComponent],
    }).compileComponents();
  }));

  it('should not have konami entered upon startup', () => {
    // Arrange
    const fixture = TestBed.createComponent(KonamiCodeComponent);
    const compiled = fixture.nativeElement;
    const app = fixture.componentInstance;

    // Assert
    expect(app.isKonamiEntered).toBeFalse();
    expect(compiled.querySelector('img')).toBeNull();
  });

  it('should have konami entered upon calling handleKonami()', () => {
    // Arrange
    const fixture = TestBed.createComponent(KonamiCodeComponent);
    const compiled = fixture.nativeElement;
    const app = fixture.componentInstance;

    // Act
    app.handleKonami();
    fixture.detectChanges();

    // Assert
    expect(app.isKonamiEntered).toBeTrue();
    expect(compiled.querySelector('img')).not.toBeNull();
  });
});
