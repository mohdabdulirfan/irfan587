import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
color;
  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getUsers().subscribe(c =>{
      this.color=c;
    })
  }

}
