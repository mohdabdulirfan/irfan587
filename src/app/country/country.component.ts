import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { DataService } from '../data.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country;
  constructor(private data: DataService){}

  ngOnInit() {
    this.data.getCountries().subscribe(d =>{
      this.country=d;
    })
  }

}
