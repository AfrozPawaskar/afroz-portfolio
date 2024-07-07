import { Injectable } from '@angular/core';
import { Profile } from '../profile-card/profile-card.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileCardService {
  private profile: Profile = {
    name: "Afroz Pawaskar",
    tagline: "Frontend Web Developer",
    email: "afrozpawaskar716@gmail.com",
    phoneNumber: "+91 70833 01898"
  };

  getProfile(): Profile {
    return this.profile;
  }
}
