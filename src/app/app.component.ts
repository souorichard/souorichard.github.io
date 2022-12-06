import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  menuOpened: boolean = false;
  sideMenu = document.querySelector('.sideMenu');

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', function () {
      const toolbar = this.document.querySelector('.toolbar');
      toolbar?.classList.toggle('sticky', this.window.scrollY > 0);
    });
  }

  scrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;

    if (this.menuOpened === true) {
      this.sideMenu?.classList.toggle('open');
    }
  }

}
