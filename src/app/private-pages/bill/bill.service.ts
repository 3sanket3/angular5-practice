import { Injectable } from '@angular/core';

@Injectable()
export class BillService {

  constructor() { }
  getCount() : number{
    return +(localStorage.getItem('count')|| 0);
  }

  incrementCount() : void{
    localStorage.setItem('count', (this.getCount()+1).toString());
  }
}
