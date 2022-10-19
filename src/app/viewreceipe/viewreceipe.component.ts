import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewreceipe',
  templateUrl: './viewreceipe.component.html',
  styleUrls: ['./viewreceipe.component.css']
})
export class ViewreceipeComponent implements OnInit {

  constructor() { }

  receipeData=[{"id":"1","name":"biryani","ing":"rice,chicken,masala","category":"Non-Veg","duration":"2hr"}]
  ngOnInit(): void {
  }

}
