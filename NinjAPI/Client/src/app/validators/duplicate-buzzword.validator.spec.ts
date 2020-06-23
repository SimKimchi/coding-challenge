import { FormControl } from '@angular/forms';
import { duplicateBuzzwordValidator } from './duplicate-buzzword.validator';

describe('DuplicateBuzzwordValidator', () => {
  it('should return an error object when the new buzzword is a duplicate.', () => {
    // Arrange
    const buzzwords = ['java', 'python'];
    const input = new FormControl('');
    const expectedResult = { duplicateBuzzword: { value: 'java' } };

    input.setValue('java');

    // Act
    const result = duplicateBuzzwordValidator(buzzwords)(input);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return null when the new buzzword is not a duplicate.', () => {
    // Arrange
    const buzzwords = ['java', 'python'];
    const input = new FormControl('');

    input.setValue('typescript');

    // Act
    const result = duplicateBuzzwordValidator(buzzwords)(input);

    // Assert
    expect(result).toBeNull();
  });
});
