import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() {
  }

  yearsOfExperience!: number;

  ngOnInit(): void {
    let dateIStarted = new Date(2016, 6).getTime();
    let now = Date.now();
    let diffInMilliseconds = now - dateIStarted;
    this.yearsOfExperience = Math.floor(diffInMilliseconds / 31536000000);
  }
}
