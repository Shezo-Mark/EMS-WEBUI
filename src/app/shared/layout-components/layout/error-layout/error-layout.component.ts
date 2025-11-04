import { Component } from '@angular/core';
import { SwitcherService } from 'src/app/shared/services/switcher.service';

@Component({
  selector: 'app-error-layout',
  templateUrl: './error-layout.component.html',
  styleUrls: ['./error-layout.component.scss'],
})
export class ErrorLayoutComponent {
  constructor(public SwitcherService: SwitcherService) {
    document.body.classList.add('login-img');
  }

  ngOnInit(): void {}
  toggleSwitcher() {
    this.SwitcherService.emitChange(true);
    document.querySelector('body')?.classList.remove('sidenav-toggled-open');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('login-img');
    location.reload();
  }
}
