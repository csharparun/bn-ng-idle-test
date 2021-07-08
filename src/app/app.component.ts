import { Component, VERSION } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private bnIdle: BnNgIdleService) {
  }

  ngOnInit(): void {
    this.bnIdle.startWatching(60).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        console.log('session expired');
      }
    });
  }
}


