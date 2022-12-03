import { AboutCard } from './../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent implements OnInit {

  aboutCards: AboutCard[] = [
    { id: 'soccer', title: 'Soccer Player', text: 'I like to play ball in my spare time, and as a way to interact more with my father.' },
    { id: 'programmer', title: 'Programmer', text: 'I practice a lot of programming (Full Stack), many times in my free times throughout the week.' },
    { id: 'studying', title: 'Studying', text: 'I study 1 or 2 hours a day, I seek to learn more and more new technologies and languages, as well as new things.' },
    { id: 'guitar-player', title: 'Guitar Player', text: 'As a form of relief, I play guitar to distract with friends or when I have finished my daily chores.' },
    { id: 'watching', title: 'Watching', text: "I watch movies and series in vague times, but it's very rare, I like many genres but my favorite is Terror." },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
