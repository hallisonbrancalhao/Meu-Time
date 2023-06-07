import { GoalsMinute } from '../../../../@types/goals.types';
import { TeamService } from '../../../../core/service/team/team.service';
import { Player, Team } from '../../../../@types/squad.dto.types';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  isLoading = true;
  squad$ = new BehaviorSubject<Player[]>([]);
  team$ = new BehaviorSubject<Team>({
    id: this.activeRoute.snapshot.params['time'],
    name: '',
    logo: '',
  });
  formation$ = new BehaviorSubject<string>('');
  dataGoals$ = new BehaviorSubject<GoalsMinute | object>({});

  constructor(
    private activeRoute: ActivatedRoute,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.teamService
      .getSquad(this.activeRoute.snapshot.params['time'])
      .subscribe((res) => {
        this.squad$.next(res.players);
        this.isLoading = false;
        this.team$.next(res.team);
      });
    this.teamService
      .getStatistics({
        leagueId: this.activeRoute.snapshot.params['liga'],
        seasonId: parseInt(this.activeRoute.snapshot.params['temporada']),
        teamId: this.team$.value.id.toString(),
      })
      .subscribe((res) => this.formation$.next(res));
  }
}
