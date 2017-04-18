import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchLocation = "Newport Beach"
  constructor() { }

  ngOnInit() {
  }

  submitSearch(event, formData){
      console.log(event)
      console.log(formData.value)
      // this.http.post(endpoint, {})
  }
  searchQueryChange(){
      this.searchLocation = 'California'
  }

}
