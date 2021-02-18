import { Component, OnInit } from '@angular/core';
import { RedirectService } from '../service/redirect.service';
import { Router } from '@angular/router';
import { RiverSection } from '../model/river-section';

@Component({
  selector: 'app-map',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  zoom = 15;
  lat: number;
  lng: number;

  constructor(private redirectService: RedirectService,
    private router: Router) { }

  ngOnInit() {
  }

  public getCoordinates(): number[] {
    return this.redirectService.getCoordinates();
  }
}
