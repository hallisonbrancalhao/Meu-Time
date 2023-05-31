import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
})
export class FindComponent {
  @Output() public emitSearch: EventEmitter<string> = new EventEmitter();

  public search(value: string) {
    this.emitSearch.emit(value);
  }
}
