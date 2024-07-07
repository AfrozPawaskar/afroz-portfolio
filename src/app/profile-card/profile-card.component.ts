import { Component, OnInit } from '@angular/core';
import { Profile } from './profile-card.interface';
import { ProfileCardService } from '../services/profile-card.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  profile!: Profile;

  constructor(private profileService: ProfileCardService) { }

  ngOnInit(): void {
    this.profile = this.profileService.getProfile();
  }
}
