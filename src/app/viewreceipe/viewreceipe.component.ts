import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewreceipe',
  templateUrl: './viewreceipe.component.html',
  styleUrls: ['./viewreceipe.component.css']
})
export class ViewreceipeComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewReceipe().subscribe(
      (data)=>{
        this.receipeData=data
      }
    )
  }

  receipeData:any=[]
  ngOnInit(): void {
  }

}
