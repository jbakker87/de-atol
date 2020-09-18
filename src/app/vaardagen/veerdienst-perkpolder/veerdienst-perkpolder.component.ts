import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-veerdienst-perkpolder',
  templateUrl: './veerdienst-perkpolder.component.html',
  styleUrls: ['./veerdienst-perkpolder.component.css']
})
export class VeerdienstPerkpolderComponent implements OnInit {
  columnsToDisplay: string[] = ['text', 'time1', 'time2', 'time3'];
  scheduleSource = new MatTableDataSource<PerkpolderData>(schedulePerkpolderData);
  dataSource: MatTableDataSource<PerkpolderData>;

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(schedulePerkpolderData);
  }

  ngOnInit(): void {
  }
}

export interface PerkpolderData {
  text: string;
  time1: string;
  time2: string;
  time3: string;
}

const schedulePerkpolderData: PerkpolderData[] = [
  { text: 'Zondag', time1: '09:00', time2: '11:00', time3: '16:15' },
  { text: 'Maandag', time1: '09:00', time2: '11:00', time3: '16:15' },
  { text: 'Woensdag', time1: '09:00', time2: '11:00', time3: '16:15' },
  { text: 'Vrijdag', time1: '09:00', time2: '11:00', time3: '16:15' }
];
