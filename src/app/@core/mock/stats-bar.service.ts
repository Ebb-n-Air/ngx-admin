import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { StatsBarData } from '../data/stats-bar';

@Injectable()
export class StatsBarService extends StatsBarData {

  private statsBarData: number[] = [
    300000, 520000, 435000, 530000,
    730000, 620000, 660000, 860000,
  ];

  getStatsBarData(): Observable<number[]> {
    return observableOf(this.statsBarData);
  }
}
