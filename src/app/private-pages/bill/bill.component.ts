import { Component, OnInit } from '@angular/core';
import { BillService } from './bill.service';

@Component({
  selector: 'bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(private billService : BillService) { }

  ngOnInit() {
  }

  currentCount():number {
    return this.billService.getCount();
  }

  incrementCount():void{
    this.billService.incrementCount();
  }
}
