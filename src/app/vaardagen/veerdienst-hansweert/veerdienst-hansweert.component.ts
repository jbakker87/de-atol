import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-veerdienst-hansweert',
  templateUrl: './veerdienst-hansweert.component.html',
  styleUrls: ['./veerdienst-hansweert.component.css']
})
export class VeerdienstHansweertComponent implements OnInit {
  columnsToDisplay: string[] = ['text', 'time1', 'time2', 'time3'];
  scheduleSource = new MatTableDataSource<HansweertData>(scheduleHansweertData);
  dataSource: MatTableDataSource<HansweertData>;

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(scheduleHansweertData);
  }

  ngOnInit(): void {
  }
}

export interface HansweertData {
  text: string;
  time1: string;
  time2: string;
  time3: string;
}

const scheduleHansweertData: HansweertData[] = [
  { text: 'Zondag', time1: '11:00', time2: '12:00', time3: '17:00' },
  { text: 'Maandag', time1: '11:00', time2: '11:00', time3: '17:00' },
  { text: 'Woensdag', time1: '11:00', time2: '12:00', time3: '17:00' },
  { text: 'Vrijdag', time1: '11:00', time2: '12:00', time3: '17:00' }
]
