import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-veerdienst-hansweert',
  templateUrl: './veerdienst-hansweert.component.html',
  styleUrls: ['./veerdienst-hansweert.component.css']
})
export class VeerdienstHansweertComponent implements AfterViewInit {
  columnsToDisplay: string[] = ['date', 'time1', 'time2', 'time3'];
  scheduleHansweertSource = new MatTableDataSource<HansweertData>(scheduleHansweertData);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.scheduleHansweertSource.paginator = this.paginator;
  }
}

export interface HansweertData {
  date: Date;
  time1: string;
  time2: string;
  time3: string;
}

const scheduleHansweertData: HansweertData[] = [
  { date: new Date(2021, 6, 21), time1: '10:00', time2: '12:00', time3: '17:00' },  
  { date: new Date(2021, 6, 23), time1: '10:00', time2: '12:00', time3: '17:00' },
  { date: new Date(2021, 6, 25), time1: '10:00', time2: '12:00', time3: '17:00' }, // zondag
  { date: new Date(2021, 6, 26), time1: '10:00', time2: '12:00', time3: '17:00' },
  { date: new Date(2021, 6, 28), time1: '10:00', time2: '12:00', time3: '17:00' },
  { date: new Date(2021, 7, 1),  time1: '10:00', time2: '12:00', time3: '17:00' }, // zondag
  { date: new Date(2021, 7, 2),  time1: '10:00', time2: '12:00', time3: '17:00' },
  { date: new Date(2021, 7, 4),  time1: '10:00', time2: '12:00', time3: '17:00' }, 
  { date: new Date(2021, 7, 6),  time1: '10:00', time2: '12:00', time3: '17:00' }, 
  { date: new Date(2021, 7, 8),  time1: '10:00', time2: '12:00', time3: '17:00' }, // zondag 
  { date: new Date(2021, 7, 9),  time1: '10:00', time2: '12:00', time3: '17:00' }, 
  { date: new Date(2021, 7, 11), time1: '10:00', time2: '12:00', time3: '17:00' }, 
  { date: new Date(2021, 7, 13), time1: '10:00', time2: '12:00', time3: '17:00' }, 
  { date: new Date(2021, 7, 15), time1: '10:00', time2: '12:00', time3: '17:00' }, // zondag
  { date: new Date(2021, 7, 16), time1: '10:00', time2: '12:00', time3: '17:00' }, 
  { date: new Date(2021, 7, 18), time1: '10:00', time2: '12:00', time3: '17:00' }, 
  { date: new Date(2021, 7, 20), time1: '10:00', time2: '12:00', time3: '17:00' }, 
  { date: new Date(2021, 7, 22), time1: '10:00', time2: '12:00', time3: '17:00' }, // zondag
  { date: new Date(2021, 7, 23), time1: '10:00', time2: '12:00', time3: '17:00' }, 
  { date: new Date(2021, 7, 25), time1: '10:00', time2: '12:00', time3: '17:00' }, 
  { date: new Date(2021, 7, 27), time1: '10:00', time2: '12:00', time3: '17:00' }, 
  { date: new Date(2021, 7, 29), time1: '10:00', time2: '12:00', time3: '17:00' }, // zondag
  // { text: 'Zondag', time1: '11:00', time2: '12:00', time3: '17:00' },
  // { text: 'Maandag', time1: '11:00', time2: '11:00', time3: '17:00' },17:00
  // { text: 'Woensdag', time1: '11:00', time2: '12:00', time3: '17:00' }17:00
  // { text: 'Vrijdag', time1: '11:00', time2: '12:00', time3: '17:00' }
]
