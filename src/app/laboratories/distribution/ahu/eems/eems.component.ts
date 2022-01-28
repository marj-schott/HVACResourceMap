import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-eems',
  templateUrl: './eems.component.html'
})
export class EemsComponent {
  readonly title = 'Air Handling Units: Energy Efficiency Measures';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}