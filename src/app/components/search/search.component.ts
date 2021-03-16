import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm;
  root = (<any>window);
  @Input() keyboard: boolean = false;
  @Output() updateKeyboard = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: ['', [
        Validators.required
      ]]
    })
  }

  ngOnInit(): void {
  }

  doisL() { alert('2Lembre sempre na fé não na sorte, firme e forte.'); };

  searchClean() {
    this.searchForm.controls['search'].reset();
  };

  onSubmitSearch() {
    if(this.searchForm.controls['search'].value) {
      this.root.location = `https://www.google.com.br/search?&q=${this.searchForm.controls['search'].value}`;
    }
  }

  handleKeyboard() {
    this.updateKeyboard.next();
  }

}
