import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm = new FormGroup ({
    userName: new FormControl ('',[Validators.required,Validators.pattern('^[a-zA-Z]{3,}$')]),
    userEmail: new FormControl ('',[Validators.required, Validators.email]),
    userMobile: new FormControl ('',[Validators.required, Validators.pattern('^[0-9]{3,}$')]),
    userQuery: new FormControl ('',[Validators.required])
  })

  queryFormSubmit() {
    if (this.contactForm.valid) {
      console.warn(this.contactForm.value);
      this.contactForm.reset();
    } else {
      alert("Form is invalid. Please check the fields.");
    }
  }

  get control() {
    return this.contactForm.controls;
  }

}
