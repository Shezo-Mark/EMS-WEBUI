import { Component } from '@angular/core';


  interface Alert {
    type: string;
    message: string;
    icon?: string;
    strong?: string;
    message1?: string; 
  }

  const ALERTS: Alert[] = [
    {
      type: 'success',
      message: 'Well done! You successfully read this important alert message.',
      icon: 'check-circle-o',
    },
    {
      type: 'info',
      message:
        "Heads up!This alert needs your attention, but it's not super important.",
      icon: 'bell-o',
    },
    {
      type: 'warning',
      message: "Warning! Better check yourself, you're not looking too good.",
      icon: 'exclamation ',
    },
    {
      type: 'danger',
      message: 'Oh snap!Change a few things up and try submitting again.',
      icon: 'frown-o',
    },
  ];

  const ALERTS1: Alert[] = [
    {
      type: 'default',
      message: 'This is a warning alert—check it out that has an icon too!',
      icon: 'download',
      strong: 'Default!',
    },
    {
      type: 'primary',
      message: 'This is a warning alert—check it out that has an icon too!',
      icon: 'check-square',
      strong: 'Primary!',
    },
    {
      type: 'success',
      message: 'This is a warning alert—check it out that has an icon too!',
      icon: 'thumbs-up ',
      strong: 'success',
    },
    {
      type: 'info',
      message: 'This is a warning alert—check it out that has an icon too!',
      icon: 'bell',
      strong: 'Info!',
    },
    {
      type: 'warning',
      message: 'This is a warning alert—check it out that has an icon too!',
      icon: 'info',
      strong: 'Warning!',
    },
    {
      type: 'danger',
      message: 'This is a warning alert—check it out that has an icon too!',
      icon: 'bell',
      strong: 'Danger!',
    },
  ];
  const ALERTS2: Alert[] = [
    {
      type: 'default',
      message: 'This is a default alert—check it out!',
      icon: 'download',
      strong: 'Default!',
    },
    {
      type: 'primary',
      message: 'This is a primary alert—check it out!',
      icon: 'check-square',
      strong: 'Primary!',
    },
    {
      type: 'success',
      message: 'This is a success alert—check it out!',
      icon: 'thumbs-up ',
      strong: 'success',
    },
    {
      type: 'warning',
      message: ' This is a warning alert—check it out!',
      icon: 'info',
      strong: 'warning',
    },
    {
      type: 'info',
      message: 'This is a info alert—check it out!',
      icon: 'bell',
      strong: 'Info!!',
    },
    {
      type: 'danger',
      message: 'This is a danger alert—check it out!',
      icon: 'ban',
      strong: 'Danger!',
    },
  ];
  const ALERTS3: Alert[] = [
    {
      type: 'secondary',
      message: 'This is a primary alert with ',
      message1: '.Give it a click if you like.',
      strong: 'an example link',
    },
    {
      type: 'primary',
      message: 'This is a primary alert with ',
      message1: '.Give it a click if you like.',
      strong: 'an example link!',
    },
    {
      type: 'success',
      message: 'This is a primary alert with ',
      message1: '.Give it a click if you like.',
      strong: 'an example link',
    },
    {
      type: 'warning',
      message: 'This is a primary alert with ',
      message1: '.Give it a click if you like.',
      strong: 'an example link',
    },
    {
      type: 'info',
      message: 'This is a primary alert with ',
      message1: '.Give it a click if you like.',
      strong: 'an example link!!',
    },
    {
      type: 'danger',
      message: 'This is a primary alert with ',
      message1: '.Give it a click if you like.',
      strong: 'an example link!',
    },
  ];

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
})
export class AlertsComponent {
  constructor() {}
  alerts = ALERTS;
  alerts1 = ALERTS1;
  alerts2 = ALERTS2;
  alerts3 = ALERTS3;

  ngOnInit(): void {}

  firstAlertClosed = false;
  secondAlertClosed = false;
  thirdAlertClosed = false;
  fourthAlertClosed = false;
  fifthAlertClosed = false;
  sixthAlertClosed = false;
  seventhAlertClosed = false;
  eigthAlertClosed = false;
  ninethAlertClosed = false;
  tenthAlertClosed = false;
  DismissingAlertClosed1 = false;
  DismissingAlertClosed2 = false;
  DismissingAlertClosed3 = false;
  DismissingAlertClosed4 = false;
  AlertClosed1 = false;
  AlertClosed2 = false;
  AlertClosed3 = false;
  AlertClosed4 = false;

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  deleteFunction(type: string) {
    var data = this.alerts2.filter((ele) => {
      return ele.type !== type;
    });
    this.alerts2 = data;
  }
}
