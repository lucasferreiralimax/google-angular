import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  root = (<any>window);
  @Input() keyboard: boolean = false;
  @Output() updateKeyboard = new EventEmitter<any>();

  constructor(public searchService: SearchService) {}

  ngOnInit(): void {
  }

  doisL() { alert('2Lembre sempre na fé não na sorte, firme e forte.'); };

  searchClean() {
    this.searchService.setSearch('');
  };

  searchInput(e: any) {
    this.searchService.setSearch(e.target.value);
  }

  onSubmitSearch() {
    if(this.searchService.getSearch()) {
      this.root.location = `https://www.google.com.br/search?&q=${this.searchService.getSearch()}`;
    }
  }

  handleKeyboard() {
    this.updateKeyboard.next();
  }
}
