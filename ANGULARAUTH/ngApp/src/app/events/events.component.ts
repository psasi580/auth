import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
 events=[];
  constructor(private eventsServies:EventsService) { }

  ngOnInit() {
    this.eventsServies.getEvents()
    .subscribe(
      res=>this.events=res,
      err=>console.log(err)
    )
  }

}
