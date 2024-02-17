import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  constructor() { }

  root = (<any>window).document.documentElement;
  dark = false

  getDarkMode () {
    return this.dark
  }

  darkMode (type: boolean) {
    this.dark = type
    localStorage.setItem("dark", JSON.stringify(type))
    if(type) {
      this.root.style.setProperty('--main-color', '#fff');
      this.root.style.setProperty('--main-color-rgb', '255,255,255');
      this.root.style.setProperty('--main-color-primary', '26, 115, 232');
      this.root.style.setProperty('--main-color-secondary', 'green');
      this.root.style.setProperty('--main-bg-color-primary', '#202124');
      this.root.style.setProperty('--main-bg-color-secondary', '#171717');
      this.root.style.setProperty('--main-bg-color-profile', '#202124');
      this.root.style.setProperty('--main-border-color', '#747775');
      this.root.style.setProperty('--main-invert', '1');
      this.root.style.setProperty('--logo-filter', 'grayscale(1) brightness(3)');
      this.root.style.setProperty('--input-bg-color', '#202124');
      this.root.style.setProperty('--input-bg-color-hover', '#303134');
      this.root.style.setProperty('--input-drop-shadow', '#171717');
    } else {
      this.root.style.setProperty('--main-color', '#000');
      this.root.style.setProperty('--main-color-rgb', '0,0,0');
      this.root.style.setProperty('--main-color-primary', '26, 115, 232');
      this.root.style.setProperty('--main-color-secondary', 'green');
      this.root.style.setProperty('--main-bg-color-primary', '#fff');
      this.root.style.setProperty('--main-bg-color-secondary', '#f2f2f2');
      this.root.style.setProperty('--main-bg-color-profile', '#e9eef6');
      this.root.style.setProperty('--main-border-color', '#747775');
      this.root.style.setProperty('--main-invert', '0');
      this.root.style.setProperty('--logo-filter', 'none');
      this.root.style.setProperty('--input-bg-color', '#fff');
      this.root.style.setProperty('--input-bg-color-hover', '#fff');
      this.root.style.setProperty('--input-drop-shadow', '#20212447');
    }
  }
}
