import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent {
  images = [
    { src: "https://i.ibb.co/CJKnL5d/1.jpg", tall: false },
    { src: "https://i.ibb.co/1RddYrs/2.jpg", tall: false },
    { src: "https://i.ibb.co/bPQnyN1/3.jpg", tall: true },
    { src: "https://i.ibb.co/N1Gptq1/4.jpg", tall: false },
    { src: "https://i.ibb.co/0Fkb7k7/5.jpg", tall: false },
    { src: "https://i.ibb.co/C569Mtm/6.jpg", tall: true },
    { src: "https://i.ibb.co/GW5nGvH/7.jpg", tall: false },
    { src: "https://i.ibb.co/fDv3dc9/8.jpg", tall: false },
  ];
}
