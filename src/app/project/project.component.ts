import { Component } from '@angular/core';

interface Project {
  name: string;
  desc: string;
  link: string;
  categ: string;
}


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects: Project[] = [
    {
      name: 'Splash Dash Game', desc: 'Hit the bubbles with the matching number within the time limit to score points.', categ: 'Webdesign', link: 'https://afrozpawaskar.github.io/Splash-Dash/'
    },
    {
      name: 'BMI Calculator', desc: 'This is a simple BMI (Body Mass Index) calculator web application created using HTML, CSS, and JavaScript.', categ: 'Webdesign', link: 'https://github.com/AfrozPawaskar/BMI_Calculator'
    },
    {
      name: 'E-Commerce Website', desc: 'Web designing project using html, css and js.', categ: 'Webdesign', link: '#'
    },
    {
      name: 'JS Form Validations', desc: 'Form validation using javascript.', categ: 'Webdesign', link: 'https://github.com/AfrozPawaskar/Contact_Form_with_Validation'
    },
    {
      name: 'Instagram Double Tap', desc: 'Mini project using dom as learning purpose.', categ: 'Webdesign', link: 'https://github.com/AfrozPawaskar/Double_Tap_Feature'
    },
    {
      name: 'QR Code Component', desc: 'This project is a simple QR component that allows you to scan a QR code and visit Frontend Mentor to improve your front-end skills by building projects.', categ: 'Webdesign', link: 'https://github.com/AfrozPawaskar/QR_Code_Card'
    },
    {
      name: 'Food Delivery System', desc: 'Java project using spring boot, perfom CRUD operations.', categ: 'Core Java', link: '#'
    },
    {
      name: 'Car Rental System', desc: 'A SQL system with tables for cars, customers, rentals, and payments. Utilizes stored procedures for data retrieval and triggers for automatic availability updates. ', categ: 'MYSQL', link: 'https://github.com/AfrozPawaskar/Sql_Mini_Project/blob/main/SQL%20MINI%20PROJECT.docx'
    },
    {
      name: 'Bank Management System', desc: 'A SQL-based bank management system this is mini project would involve creating a database to store information about customers and other relevant bank information. ', categ: 'MYSQL', link: 'https://github.com/AfrozPawaskar/Sql_Mini_Project/blob/main/SQL%20MINI%20PROJECT.docx'
    },
  ]
}
