import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { DiplayResultComponent } from './diplay-result/diplay-result.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    FormComponent,
    DiplayResultComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormComponent,
    DiplayResultComponent,
    HomeComponent
  ]
})
export class CalculatorModule { }
