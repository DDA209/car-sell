import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PipesModule } from '../pipes/pipes.module';
import { DirectivesModule } from '../directives/directives.module';
import { AdminRoutingModule } from './dashboard/admin-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule, // Angular form module
    ReactiveFormsModule, // Angular reactive form module, dependence: FormsModule
    PipesModule,
    DirectivesModule,
  ],
})
export class AdminModule {}
