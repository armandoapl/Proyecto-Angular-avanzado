import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() { 
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme?.setAttribute('href', url);
    //localStorage.setItem('theme', url);

  }

  changeTheme(theme: string){

    const url = `./assets/css/colors/${ theme }.css`;
    this.linkTheme?.setAttribute('href', url);

    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() : void{

    const links = document.querySelectorAll('.selector');

    links?.forEach( (elemnt : Element)=> {

      elemnt.classList.remove('working');
      const btnTheme = elemnt.getAttribute('data-theme');
      const btnLinkUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if(btnLinkUrl === currentTheme){
        elemnt.classList.add('working');
      }

    });
  }

}
