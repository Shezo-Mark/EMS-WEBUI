import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss'],
})
export class RatingsComponent {
  rate = 4;
  horiRate = 7;
  RoundRat = 3;
  movieRate = 3;

  currentRate1 = 3.15;
  currentRate = 3;
  customCurrentRate = 5;
  MultiStarCurrentRateInput = 5;
  MultiHeartsCurrentRateInput = 7;
  selected = 0;
  hovered = 0;
  readonly = true;
  heartRate = 3.45;
  SquarRate = 3;

  ctrl!: FormControl;

  constructor() {
    this.ctrl = new FormControl(null, Validators.required);
  }
  ngOnInit(): void {}

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
}
