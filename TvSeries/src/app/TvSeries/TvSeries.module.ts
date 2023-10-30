import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  TvSeriesComponent } from './TvSeries.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TvSeriesComponent],
  exports: [TvSeriesComponent]
})
export class TvSeriesModule { }
