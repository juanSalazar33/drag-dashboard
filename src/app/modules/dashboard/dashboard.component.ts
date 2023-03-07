import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

type day = {
  activityId: number;
  title: string;
  type: string;
  startDate: string;
  endDate: string;
  status: string;
}[][];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private activitiesService : ActivitiesService){}
  panels: any[]=['01-22', '01-24','01-25', '01-26']
  days: any[] = [
    [
      {
        "activityId": 1,
        "title": "Subida al cerro catedral",
        "type": "ACTIVITY",
        "startDate": "2022-01-24 01:30:00",
        "endDate": "2022-01-24 23:30:00",
        "status": "IN_PROGRESS",
        "dayMonth" : "01-24"
      },
      {
        "activityId": 2,
        "title": "Fiesta de espuma",
        "type": "PARTY",
        "startDate": "2022-01-24 01:30:00",
        "endDate": "2022-01-24 23:30:00",
        "status": "DONE",
        "dayMonth" : "01-24"
      },
      {
        "activityId": 3,
        "title": "Desayuno",
        "type": "FOOD",
        "startDate": "null",
        "endDate": "null",
        "status": "null",
        "dayMonth" : "01-24"
      }
    ],
    [
      {
        "activityId": 1,
        "title": "Subida al cerro catedral",
        "type": "ACTIVITY",
        "startDate": "2022-01-24 01:30:00",
        "endDate": "2022-01-24 23:30:00",
        "status": "IN_PROGRESS",
        "dayMonth" : "01-24"
      },
      {
        "activityId": 2,
        "title": "Fiesta de espuma",
        "type": "PARTY",
        "startDate": "2022-01-24 01:30:00",
        "endDate": "2022-01-24 23:30:00",
        "status": "DONE",
        "dayMonth" : "01-24"
      },
      {
        "activityId": 3,
        "title": "Desayuno",
        "type": "FOOD",
        "startDate": "null",
        "endDate": "null",
        "status": "null",
        "dayMonth" : "01-24"
      }
    ],
    [
      {
        "activityId": 1,
        "title": "Subida al cerro catedral",
        "type": "ACTIVITY",
        "startDate": "2022-01-25 01:30:00",
        "endDate": "2022-01-25 23:30:00",
        "status": "IN_PROGRESS",
        "dayMonth" : "01-25"
      },
      {
        "activityId": 2,
        "title": "Fiesta de espuma",
        "type": "PARTY",
        "startDate": "2022-01-25 01:30:00",
        "endDate": "2022-01-25 23:30:00",
        "status": "DONE",
        "dayMonth" : "01-25"
      },
      {
        "activityId": 3,
        "title": "Desayuno",
        "type": "FOOD",
        "startDate": "null",
        "endDate": "null",
        "status": "null",
        "dayMonth" : "01-25"
      }
    ],
    [
      {
        "activityId": 1,
        "title": "Subida al cerro catedral",
        "type": "ACTIVITY",
        "startDate": "2022-01-26 01:30:00",
        "endDate": "2022-01-26 23:30:00",
        "status": "IN_PROGRESS",
        "dayMonth" : "01-26"
      },
      {
        "activityId": 2,
        "title": "Fiesta de espuma",
        "type": "PARTY",
        "startDate": "2022-01-26 01:30:00",
        "endDate": "2022-01-26 23:30:00",
        "status": "DONE",
        "dayMonth" : "01-26"
      },
      {
        "activityId": 3,
        "title": "Desayuno",
        "type": "FOOD",
        "startDate": "null",
        "endDate": "null",
        "status": "null",
        "dayMonth" : "01-26"
      }
    ]
  ]
  colorBackGround = '#5555'
  ngOnInit(): void {
    this.activitiesService.getActivities()
      .subscribe(data => {
        console.log("api work!",data)
    })
  
  }
    
  drop(event: CdkDragDrop<string[]>) {
    //console.log(event.previousContainer, "move too::", event.container)
    if (event.previousContainer === event.container ) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
