import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchLocation = "Newport Beach"
  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitSearch(event, formData){
      console.log(event)
      console.log(formData.value)
      let query = formData.value['q']
      if (query){
         this.router.navigate(['/search', {q: query}])
      }
  }
  searchQueryChange(){
      this.searchLocation = 'California'
  }

}
