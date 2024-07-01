import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demonstration',
  templateUrl: './demonstration.component.html',
  styleUrl: './demonstration.component.css'
})
export class DemonstrationComponent {
  userId:number=0;
  constructor(private route:ActivatedRoute)
  {
    this.userId=parseInt(route.snapshot.paramMap.get("id")|| "0");

  }

}
