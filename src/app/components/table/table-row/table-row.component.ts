import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-table-row',
  template: `
    <p>
      table-row works!
    </p>
  `,
  styleUrls: ['./table-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
