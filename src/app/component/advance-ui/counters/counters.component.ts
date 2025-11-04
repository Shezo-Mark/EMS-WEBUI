import { Component, ElementRef, ViewChild } from '@angular/core';
import { TimeInterface } from 'angular-cd-timer';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss'],
})
export class CountersComponent {
  timerInfo: string | any;

  @ViewChild('days', { static: true })
  days!: ElementRef;
  @ViewChild('hours', { static: true })
  hours!: ElementRef;
  @ViewChild('minutes', { static: true })
  minutes!: ElementRef;
  @ViewChild('seconds', { static: true })
  seconds!: ElementRef;

  onComplete(data: any) {
    data.elt.nativeElement.classList.add('muteCount');
  }

  onTick(data: TimeInterface) {
    this.timerInfo = '';
  }

  onStart(data: any) {
   
  }
}
