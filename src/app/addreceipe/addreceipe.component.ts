import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addreceipe',
  templateUrl: './addreceipe.component.html',
  styleUrls: ['./addreceipe.component.css']
})
export class AddreceipeComponent implements OnInit {

  constructor() { }
  name=""
  ing=""
  category=""
  duration=""
  
  readValue=()=>{
    let data={
      "name":this.name,
      "ing":this.ing,
      "category":this.category,
      "duration":this.duration
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
