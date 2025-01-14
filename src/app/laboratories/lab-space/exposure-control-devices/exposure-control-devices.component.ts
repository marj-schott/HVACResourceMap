import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './exposure-control-devices.component.html'
})
export class ExposureControlDevicesComponent {
  readonly title = 'Exposure Control Devices';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
