import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input("src") src :string;
  @Input("alt") alt :string;
  @Input("caption") caption :string;

  constructor() { }

  ngOnInit() {
  }

}
