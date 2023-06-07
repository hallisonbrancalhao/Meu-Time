import { TeamService } from '../../../core/service/team/team.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  dataGoals$ = new BehaviorSubject<object>([]);
  isLoading = true;

  multi!: object;
  view: [number, number] = [800, 400];

  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Tempo em minutos';
  yAxisLabel = 'Gols';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.teamService
      .getGoalsByMinutes({
        leagueId: this.activeRoute.snapshot.params['liga'],
        seasonId: parseInt(this.activeRoute.snapshot.params['temporada']),
        teamId: this.activeRoute.snapshot.params['time'],
      })
      .subscribe((res) => {
        this.dataGoals$.next(res);
        this.multi = this.dataGoals$.value;
        this.isLoading = !this.isLoading;
      });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
