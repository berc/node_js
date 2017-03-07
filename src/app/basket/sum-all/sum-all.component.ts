import { Component, Input } from '@angular/core';
import { Driver } from '../driver';

@Component({
  selector: 'driver-item',
  styleUrls: ['sum-all.component.css'],
  templateUrl: 'sum-all.component.html'
})

export class DriverItemComponent {
  @Input() public data: Driver;
}
