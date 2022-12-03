import { Component, OnInit } from '@angular/core';
import { ProjectCard } from '../../core/model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  listCards: ProjectCard[] = [
    { urlImg: 'https://opengraph.githubassets.com/1/souorichard/formsapp', link: 'https://github.com/souorichard/formsApp' },
    { urlImg: 'https://opengraph.githubassets.com/1/souorichard/myPortfolio', link: 'https://github.com/souorichard/myPortfolio' },
    { urlImg: 'https://opengraph.githubassets.com/1/souorichard/webShopping', link: 'https://github.com/souorichard/webShopping' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
