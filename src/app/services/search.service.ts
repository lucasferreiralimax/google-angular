import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  search: string = '';

  constructor() { }

  getSearch () {
    return this.search;
  }

  setSearch (value: string) {
    this.search = value;
  }

}
