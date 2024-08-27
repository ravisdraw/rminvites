import { ApplicationRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { first, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  @ViewChild('audioOption') audioPlayerRef!: ElementRef;
  isMusicClicked: boolean = false; 

  storyPhotos: any[] = [
    "https://i.ibb.co/CJKnL5d/1.jpg",
    "https://i.ibb.co/1RddYrs/2.jpg",
    "https://i.ibb.co/bPQnyN1/3.jpg",
    "https://i.ibb.co/N1Gptq1/4.jpg",
    "https://i.ibb.co/0Fkb7k7/5.jpg",
    "https://i.ibb.co/C569Mtm/6.jpg",
    "https://i.ibb.co/GW5nGvH/7.jpg",
    "https://i.ibb.co/fDv3dc9/8.jpg",
  ]

  targetDate: Date = new Date('2024-08-23T17:00:00');

  @ViewChild('days', { static: true }) days!: ElementRef;
  @ViewChild('hours', { static: true }) hours!: ElementRef;
  @ViewChild('minutes', { static: true }) minutes!: ElementRef;
  @ViewChild('seconds', { static: true }) seconds!: ElementRef;

  constructor(
    private applicationRef: ApplicationRef, 
  ) {
    // ...
  }
  

  ngOnInit(): void {
    this.applicationRef.isStable.pipe(first((isStable) => isStable)).subscribe(() => {
      setInterval(() => this.tickTock(), 1000);
    });
  }

  goToLink() {  
    window.open('https://wa.link/a1azw9', '_blank', 'noopener,noreferrer');  
  }  

  tickTock() {
    const now = new Date().getTime();  
    const distance = this.targetDate.getTime() - now; 
    this.days.nativeElement.innerText =  Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));  
    this.hours.nativeElement.innerText = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));  
    this.minutes.nativeElement.innerText = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));  
    this.seconds.nativeElement.innerText = Math.abs( Math.floor((distance % (1000 * 60)) / 1000));  
  }

  changeMusic() {
    this.isMusicClicked = !this.isMusicClicked;
    if (this.isMusicClicked) {
      this.audioPlayerRef.nativeElement.play();
    } else {
      const audioPlayer = this.audioPlayerRef.nativeElement;
      audioPlayer.pause();
      // audioPlayer.currentTime = 0;
    }
  }
}
