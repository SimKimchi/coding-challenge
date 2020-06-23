import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appKonamiCode]',
})
export class KonamiCodeDirective {
  @Output() private codeEntered = new EventEmitter();
  private sequence: string[] = [];
  private konamiCode: string[] = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ];

  @HostListener('document:keydown', ['$event'])
  private handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key) {
      this.sequence.push(event.key);

      // Remove the first element of the sequence when it is full.
      if (this.sequence.length > this.konamiCode.length) {
        this.sequence.shift();
      }

      // Triggers the konami code event to the parent component.
      if (this.isKonamiCode()) {
        this.codeEntered.emit();
      }
    }
  }

  // Checks whether both 'sequence' and 'konamiCode' have the same elements.
  private isKonamiCode(): boolean {
    return this.konamiCode.every(
      (code: string, index: number) => code === this.sequence[index]
    );
  }
}
