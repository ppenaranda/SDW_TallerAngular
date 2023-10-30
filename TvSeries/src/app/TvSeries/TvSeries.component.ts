import { Component, OnInit } from '@angular/core';
import { Serie } from './TvSeries';
import { TvSeriesService } from './TvSeries.service';

@Component({
  selector: 'app-TvSeries',
  templateUrl: './TvSeries.component.html',
  styleUrls: ['./TvSeries.component.css']
})
export class TvSeriesComponent implements OnInit {

  constructor(private TvSeriesService: TvSeriesService) { }
  series: Array<Serie> = [];
  seasonsAverage = 0;

  getSeries() {
    this.TvSeriesService.getSeries().subscribe(series => {
      series.forEach(serie => {
        this.seasonsAverage += serie.seasons
    })
    this.seasonsAverage = this.seasonsAverage / series.length
    this.series = series;
  });
  }

  ngOnInit() {
    this.getSeries();
  }

}