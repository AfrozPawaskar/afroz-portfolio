import { Component } from '@angular/core';

interface MyCertificate {
  name: string;
  source: string;
  image?: string;
  // link: string;
  date: Date;
}

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {

  certificates: MyCertificate[] = [
    {
      name: 'Web Designing Essential',
      source: 'I.T. Vedant',
      date: new Date(2023, 2, 3),
      image: '/assets/Certificates/Web Designing Essential.jpg',
      // link: 'https://github.com/AfrozPawaskar/WebDesigningEssential'
    },
    {
      name: 'AWS Cloud Practitioner',
      source: 'I.T. Vedant',
      date: new Date(2023, 10, 8),
      image: '/assets/Certificates/AWS Certificate.jpg',
      // link: 'https://github.com/AfrozPawaskar/Certificate1'
    },
    {
      name: 'Foundation With SQL',
      source: 'I.T. Vedant',
      date: new Date(2023, 2, 20),
      image: '/assets/Certificates/FSQL.jpg',
      // link: 'https://github.com/AfrozPawaskar/Certificate1'
    },
    {
      name: 'Core Java & Spring Boot',
      source: 'I.T. Vedant',
      date: new Date(2023, 6, 21),
      image: '/assets/Certificates/corejava & springboot.jpg',
      // link: 'https://github.com/AfrozPawaskar/Certificate1'
    },
    {
      name: 'Java Fundamentals',
      source: 'IBMCEP',
      date: new Date(2023, 6, 21),
      image: '/assets/Certificates/Java Fundamentals IBM Certificate.jpg',
      // link: 'https://github.com/AfrozPawaskar/Certificate1'
    }
  ];
}
