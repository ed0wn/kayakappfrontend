import { Injectable } from '@angular/core';
import { RiverSection } from '../model/river-section';

@Injectable()
export class RedirectService {

  section = new RiverSection();

  constructor() { }

  setSection(section: RiverSection) {
    this.section = section;
  }

  getCoordinates() : number[] {
    return [this.section.latitude, this.section.longitude];
  }

  getSection() : RiverSection {
    return this.section;
  }
}
