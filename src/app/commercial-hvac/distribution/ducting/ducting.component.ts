import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './ducting.component.html'
})
export class DuctingComponent {
  readonly title = 'Ducting';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
