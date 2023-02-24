import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isChecked = false;
  constructor(public theme: CommonService) {
    this.isChecked = theme.current === 'light' ? false : true;
  }

  public switchTheme(): void {
    if (this.theme.current === 'light') {
      this.theme.current = 'dark';
      this.isChecked = true;
    } else {
      this.theme.current = 'light';
      this.isChecked = false;
    }
  }
}
