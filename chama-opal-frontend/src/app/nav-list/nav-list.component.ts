import { Component, OnInit } from '@angular/core';
import { River } from '../model/river';
import { RiverSection } from '../model/river-section';
import { RiverService } from '../service/river.service';
import { RiverSectionService } from '../service/river-section.service';
import { RedirectService } from '../service/redirect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {

  rivers: River[];
  sections: RiverSection[];

  constructor(
    private riverService: RiverService,
    private riverSectionService: RiverSectionService,
    private redirectService: RedirectService,
    private router: Router
    ) { }

  ngOnInit() {
    this.riverService.findAll().subscribe(value => this.rivers = value, 
      err => {
        localStorage.removeItem('jwt');
        this.router.navigate(['login']);
      });
  }
  onRiverClick(riverName: string) {
    this.riverSectionService.findSectionsByRiver(riverName).subscribe(value => this.sections = value);
  }

  onSectionClick(section: RiverSection) {
    this.redirectService.setSection(section);
  }

}
