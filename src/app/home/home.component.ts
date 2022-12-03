import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    function typeWrite(element: any) {
      const textArray = element.innerHTML.split('');
      element.innerHTML = ' ';
      textArray.forEach(function (string: any, i: number) {
        setTimeout(function () {
          element.innerHTML += string;
        }, 200 * i);
      });
    }

    const title = document.querySelector('.titleHome');
    typeWrite(title);
  }

}
