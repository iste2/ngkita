import { Injectable } from '@angular/core';
import { CapacityEntry } from './CapacityEntry';

@Injectable({
  providedIn: 'root',
})
export class MeetingneedsService {
  capacityEntries: CapacityEntry[] = [

  ];

  constructor() {}
}
