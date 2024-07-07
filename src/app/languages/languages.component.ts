import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  template: `
    <div class="card">
        <h3>{{title}}</h3>

        <div class="languages">

        <span *ngFor="let language of languages">{{ language }}</span>

      </div>
    </div>
  `,
  styles: [`
 
  .languages {
    display: flex;
    gap: 50px;
    margin-top: 10px;
  }

  `]
})
export class LanguagesComponent {
title:string = 'Known Languages'
languages: string[] = ['English', 'Urdu', 'Hindi', 'Marathi'];
}
