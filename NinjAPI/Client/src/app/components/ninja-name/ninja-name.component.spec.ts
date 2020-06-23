import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NinjaNameComponent } from './ninja-name.component';
import { NinjaNameService } from './ninja-name.service';
import { of } from 'rxjs/internal/observable/of';
import { throwError } from 'rxjs';

describe('NinjaNameComponent', () => {
  let mockNinjaNameService: any;

  it('should call the ninja service and receive a valid name.', fakeAsync(() => {
    // Arrange
    const expectedNinjaName = { name: 'Ninja' };
    const expectedHtmlResult = 'Ninja !!! ';

    mockNinjaNameService = jasmine.createSpyObj(['getNinjaName']);
    mockNinjaNameService.getNinjaName.and.returnValue(of(expectedNinjaName));

    TestBed.configureTestingModule({
      declarations: [NinjaNameComponent],
      providers: [
        { provide: NinjaNameService, useValue: mockNinjaNameService },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(NinjaNameComponent);
    const app = fixture.componentInstance;
    const compile = fixture.nativeElement;

    app.buzzwords = [];

    // Act
    app.submitBuzzwords();
    tick();
    fixture.detectChanges();

    // Assert
    expect(app.ninjaName).toBe(expectedNinjaName.name);
    expect(app.isNinjaNameValid).toBeTrue();
    expect(app.wordsSubmitted).toBeTrue();
    expect(app.ninjaErrorMessage).toBeUndefined();
    expect(compile.querySelector('h1').textContent).toContain(
      expectedHtmlResult
    );
  }));

  it('should properly handle errors returned by the server.', fakeAsync(() => {
    // Arrange
    const expectedErrorMessage = 'Badrequest';

    mockNinjaNameService = jasmine.createSpyObj(['getNinjaName']);
    mockNinjaNameService.getNinjaName.and.returnValue(
      throwError({ error: expectedErrorMessage })
    );

    TestBed.configureTestingModule({
      declarations: [NinjaNameComponent],
      providers: [
        { provide: NinjaNameService, useValue: mockNinjaNameService },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(NinjaNameComponent);
    const app = fixture.componentInstance;
    const compile = fixture.nativeElement;

    app.buzzwords = [];

    // Act
    app.submitBuzzwords();
    tick();
    fixture.detectChanges();

    // Assert
    expect(app.ninjaName).toBeNull();
    expect(app.isNinjaNameValid).toBeFalse();
    expect(app.wordsSubmitted).toBeTrue();
    expect(app.ninjaErrorMessage).toBe(expectedErrorMessage);
    expect(compile.querySelector('h1')).toBeNull();
  }));
});
