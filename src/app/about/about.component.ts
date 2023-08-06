import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = 'about';
  aboutTextH1:string='Welcome to the Fruits Blog';
  aboutTextH4:string='Eat well! Live limitless';
  aboutTextH5:string='Join us in celebrating the love for fruits at various fruit-themed events and festivals worldwide. From cherry blossom festivals to mango celebrations, there are numerous occasions where fruits take the center stage.';
  aboutImage:string='https://c4.wallpaperflare.com/wallpaper/384/202/330/fresh-red-apple-wallpaper-preview.jpg';
}
