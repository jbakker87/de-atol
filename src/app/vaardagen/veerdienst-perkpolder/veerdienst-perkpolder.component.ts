import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-veerdienst-perkpolder',
  templateUrl: './veerdienst-perkpolder.component.html',
  styleUrls: ['./veerdienst-perkpolder.component.css']
})
export class VeerdienstPerkpolderComponent implements AfterViewInit {
  columnsToDisplay: string[] = ['date', 'time1', 'time2', 'time3'];
  scheduleSource = new MatTableDataSource<PerkpolderData>(schedulePerkpolderData);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.scheduleSource.paginator = this.paginator;
  }
}

export interface PerkpolderData {
  date: Date;
  time1: string;
  time2: string;
  time3: string;
}

const schedulePerkpolderData: PerkpolderData[] = [
  { date: new Date(2021, 6, 21), time1: '09:00', time2: '11:00', time3: '16:15' },
  { date: new Date(2021, 6, 23), time1: '09:00', time2: '11:00', time3: '16:15' },
  { date: new Date(2021, 6, 25), time1: '09:00', time2: '11:00', time3: '16:15' }, // zondag
  { date: new Date(2021, 6, 26), time1: '09:00', time2: '11:00', time3: '16:15' },
  { date: new Date(2021, 6, 28), time1: '09:00', time2: '11:00', time3: '16:15' },
  { date: new Date(2021, 7, 1), time1: '09:00', time2: '11:00', time3: '16:15' }, // zondag
  { date: new Date(2021, 7, 2), time1: '09:00', time2: '11:00', time3: '16:15' },
  { date: new Date(2021, 7, 4), time1: '09:00', time2: '11:00', time3: '16:15' }, 
  { date: new Date(2021, 7, 6), time1: '09:00', time2: '11:00', time3: '16:15' }, 
  { date: new Date(2021, 7, 8), time1: '09:00', time2: '11:00', time3: '16:15' }, // zondag 
  { date: new Date(2021, 7, 9), time1: '09:00', time2: '11:00', time3: '16:15' }, 
  { date: new Date(2021, 7, 11), time1: '09:00', time2: '11:00', time3: '16:15' }, 
  { date: new Date(2021, 7, 13), time1: '09:00', time2: '11:00', time3: '16:15' }, 
  { date: new Date(2021, 7, 15), time1: '09:00', time2: '11:00', time3: '16:15' }, // zondag
  { date: new Date(2021, 7, 16), time1: '09:00', time2: '11:00', time3: '16:15' }, 
  { date: new Date(2021, 7, 18), time1: '09:00', time2: '11:00', time3: '16:15' }, 
  { date: new Date(2021, 7, 20), time1: '09:00', time2: '11:00', time3: '16:15' }, 
  { date: new Date(2021, 7, 22), time1: '09:00', time2: '11:00', time3: '16:15' }, // zondag
  { date: new Date(2021, 7, 23), time1: '09:00', time2: '11:00', time3: '16:15' }, 
  { date: new Date(2021, 7, 25), time1: '09:00', time2: '11:00', time3: '16:15' }, 
  { date: new Date(2021, 7, 27), time1: '09:00', time2: '11:00', time3: '16:15' }, 
  { date: new Date(2021, 7, 29), time1: '09:00', time2: '11:00', time3: '16:15' }, // zondag
];
