import { Team } from '../../../../@types/teams.type';
import { Country } from '../../../../@types/countrie.type';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Season } from '../../../../@types/leagues.type';
import { TeamService } from '../../../../core/service/team/team.service';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../../../../@types/squad.dto.types';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  #team!: Team;
  #country!: Country;
  #season!: Season;

  squad$ = new BehaviorSubject<Player[]>([]);

  constructor(
    private activeRoute: ActivatedRoute,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.#season = this.activeRoute.snapshot.params['temporada'];
    this.#country = this.activeRoute.snapshot.params['pais'];
    this.#team = this.activeRoute.snapshot.params['time'];

    this.teamService
      .getSquad(this.activeRoute.snapshot.params['time'])
      .subscribe((player) => this.squad$.next(player));
  }
}
