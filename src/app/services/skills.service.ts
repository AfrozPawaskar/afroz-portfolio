import { Injectable } from '@angular/core';
import { SkillItem } from '../skills/skills.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private mySkills: SkillItem[] = [
    { title: 'Web Development', skill: 'HTML5' },
    { title: 'Web Development', skill: 'CSS3' },
    { title: 'Web Development', skill: 'Javascript' },
    { title: 'Web Development', skill: 'Bootstrap' },
    { title: 'Web Development', skill: 'jQuery' },
    { title: 'Web Development', skill: 'Angular' },
    { title: 'Database', skill: 'MySql' },
    { title: 'Programming', skill: 'Core Java' },
    { title: 'Programming', skill: 'Spring Boot' },
    { title: 'Office Tools', skill: 'MS Office' },
    { title: 'Graphic Design', skill: 'Adobe Photoshop' }
  ];

  constructor() {}

  getCategorizedSkills(): { title: string, skills: SkillItem[] }[] {
    const categorizedSkills: { title: string, skills: SkillItem[] }[] = [];

    const categories = Array.from(new Set(this.mySkills.map(skill => skill.title)));
    categories.forEach(category => {
      const skills = this.mySkills.filter(skill => skill.title === category);
      categorizedSkills.push({ title: category, skills: skills });
    });

    return categorizedSkills;
  }
}
