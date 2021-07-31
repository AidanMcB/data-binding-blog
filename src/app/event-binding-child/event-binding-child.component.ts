import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding-child',
  templateUrl: './event-binding-child.component.html',
  styleUrls: ['./event-binding-child.component.scss']
})
export class EventBindingChildComponent implements OnInit {

  @Input() todoItem: string;
  @Output() deleteRequest = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteRequest.emit(this.todoItem);
  }

}
