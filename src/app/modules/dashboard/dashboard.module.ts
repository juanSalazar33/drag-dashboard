import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
//Material
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
    DragDropModule
  ]
})
export class DashboardModule { 
}
