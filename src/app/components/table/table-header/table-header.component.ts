import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-table-header',
  template: `
    <p>
      table-header works!
    </p>
  `,
  styleUrls: ['./table-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
