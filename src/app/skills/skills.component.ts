import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';
import { SkillItem } from './skills.interface';

@Component({
  selector: 'app-skills',
  template: `
    <div class="card">
      <h3 class="skill-header flex">
        {{ title }}
        <span class="search-container">
          <input class="search-input" type="text" [(ngModel)]="searchTerm" placeholder="Search Skills" [value]="searchTerm | titlecase">

        </span>
      </h3>
      
      <ng-container *ngFor="let category of categorizedSkills">
        <h4>{{ category.title }}</h4>
        <ul>
          <li *ngFor="let skill of category.skills">
            <span *ngIf="skill.skill.toLowerCase().includes(searchTerm.toLowerCase())">
              {{ skill.skill }}
            </span>
          </li>
        </ul>
      </ng-container>
    </div>
  `,
  styles: [`
    .skill-header {
      justify-content: space-between;
      margin-bottom: 16px;
    }

    .search-input {
      font-family: "Ubuntu", sans-serif;
      width: 200px;
      height: 25px;
      padding: 5px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 5px;
      outline: none;
      transition: border-color 0.2s ease;
    }

    .search-input:focus {
      border-color: var(--accent-color);
    }

    h4 {
      margin-bottom: 9px;
    }

    li {
      margin-top: 5px;
      margin-bottom: 5px;
    }

    li:last-child {
      margin-bottom: 16px;
    }
  `]
})
export class SkillsComponent implements OnInit {
  title: string = "Skills";
  categorizedSkills: { title: string, skills: SkillItem[] }[] = [];
  searchTerm: string = '';

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.categorizedSkills = this.skillsService.getCategorizedSkills();
  }
}
