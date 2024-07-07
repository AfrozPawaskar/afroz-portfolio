import { Component } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent {
  title: string = "Education";

  education: any[] = [
    {
      Exams: 'Bachelor of Science in Information Technology', PassingYear: '2022',
      University: 'University of Mumbai', Grades: 56.26
    },
    {
      Exams: 'HSC', PassingYear: '2019',
      University: 'MSBSHSE', Grades: 53.69
    },
    {
      Exams: 'SSC', PassingYear: '2017',
      University: 'MSBSHSE', Grades: 75.60
    }
  ]

}
