export interface VaarDatum {
    date: Date;
    afvaart: string;
    pax: number;
  }

export const vaarData: VaarDatum[] = [
    {
      date: new Date('2020-9-3'),
      afvaart: '13:00',
      pax: 10
    },
    {
      date: new Date('2020-9-6'),
      afvaart: '13:15',
      pax: 50
    },
    {
      date: new Date('2020-9-10'),
      afvaart: '13:30',
      pax: 23
    },
  ];
