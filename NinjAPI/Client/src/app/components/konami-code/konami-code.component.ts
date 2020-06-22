import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-konami-code',
  templateUrl: './konami-code.component.html',
})
export class KonamiCodeComponent {
  public isKonamiEntered: boolean;

  public handleKonami() {
    this.isKonamiEntered = true;
  }
}
