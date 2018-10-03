import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-table-footer',
  template: `
    <p>
      table-footer works!
    </p>
  `,
  styleUrls: ['./table-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
