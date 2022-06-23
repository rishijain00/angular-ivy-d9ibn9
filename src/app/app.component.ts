import {
  Component,
  ElementRef,
  VERSION,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  message: string = '';
  parentValue: string = 'I am parent';

  /*   @ViewChild('ptag') PTageRef: ElementRef; */

  @ViewChildren('ptag') PTageRef!: QueryList<any>;
  ngOnInit() {
    console.log(this.PTageRef);
  }

  ngAfterViewInit() {
    // console.log(this.PTageRef.nativeElement);

    /*     this.PTageRef.nativeElement.innerHTML =
      'Hey! my value has beed chanaged dynamically'; */

    this.PTageRef.map((value) => {
      console.log(value);

      value.nativeElement.innerHTML = 'Hey, Apan changed';
    });
  }

  getValuefromChild(value) {
    this.message = value;
  }
}
