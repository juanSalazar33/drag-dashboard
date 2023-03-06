import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  activitiesArray = []
  constructor(private activitiesService : ActivitiesService){}
  ngOnInit(): void {
    console.log("work")
    this.activitiesService.getActivities()
      .subscribe(data => {
        console.log(data)
    })
  
  }
}
