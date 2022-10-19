import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addreceipe',
  templateUrl: './addreceipe.component.html',
  styleUrls: ['./addreceipe.component.css']
})
export class AddreceipeComponent implements OnInit {

  constructor(private myapis:ApiService) { }
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
    this.myapis.addReceipe(data).subscribe(
      (response)=>{
        console.log("test")
      }

    )
    alert("successfully added")
    
    this.name=""
    this.ing=""
    this.category=""
    this.duration=""
  }

  ngOnInit(): void {
  }

}
