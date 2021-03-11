import { Component, OnInit, HostListener, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: boolean = false;

  constructor(private _elementRef : ElementRef,) { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  handleOutsideClick(event: any) {
    if (
        !event.path.includes(this._elementRef.nativeElement)
      ) { this.profile = false }

    console.log(this.profile);
  }

}
