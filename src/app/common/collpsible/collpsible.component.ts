import { Component, OnInit, ElementRef, Input, OnChanges } from "@angular/core";

@Component({
  selector: "collpsible",
  templateUrl: "./collpsible.component.html",
  styleUrls: ["./collpsible.component.css"]
})
export class CollapsibleComponent implements OnInit, OnChanges {
  @Input("state") state: string;
  viewOriginalHeight: number;
  viewCurrentHeight: string;
  constructor(private el: ElementRef) {}

  ngOnInit() {
   
  }

  ngOnChanges() {
    if (!this.viewOriginalHeight) {
      this.viewOriginalHeight = this.el.nativeElement.clientHeight;
    }
    this.viewCurrentHeight = this.state === "open" ? this.viewOriginalHeight + "px" : "0px";
  }
}
