import { Component, OnInit } from '@angular/core';

import { HEROES, Hero } from 'src/mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = HEROES[0];
  heroes = HEROES;
  selectedHero: Hero;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

}

