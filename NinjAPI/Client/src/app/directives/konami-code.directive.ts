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
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key) {
      this.sequence.push(event.key);

      if (this.sequence.length > this.konamiCode.length) {
        this.sequence.shift();
      }

      if (this.isKonamiCode()) {
        this.codeEntered.emit();
      }
    }
  }

  constructor() {}

  private isKonamiCode(): boolean {
    return this.konamiCode.every(
      (code: string, index: number) => code === this.sequence[index]
    );
  }
}
