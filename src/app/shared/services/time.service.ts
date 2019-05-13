import { Injectable } from '@angular/core';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  readonly friendlyFormat: string = 'DD/MM/YYYY HH:mm';

  getDate(date: string | Date = new Date()): moment.Moment {
    return moment(new Date(date));
  }

  getMoment(seconds: number): moment.Moment {
    return moment(seconds);
  }


  toHHMMSS(valueInSeconds: any) {
    const secNum: any = parseInt(valueInSeconds, 10);
    let hours: any = Math.floor(secNum / 3600);
    let minutes: any = Math.floor((secNum - (hours * 3600)) / 60);
    let seconds: any = secNum - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = '0' + hours; }
    if (minutes < 10) { minutes = '0' + minutes; }
    if (seconds < 10) { seconds = '0' + seconds; }
    return hours + ':' + minutes + ':' + seconds;
  }


}
