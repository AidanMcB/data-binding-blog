import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-parent',
  templateUrl: './event-binding-parent.component.html',
  styleUrls: ['./event-binding-parent.component.scss']
})
export class EventBindingParentComponent implements OnInit {

  public todoItems: string[] = [
    'Mow the lawn',
    'Walk the dog',
    'Clean up the yard',
    'Milk the goats'
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public deleteThis(item){
    let itemIndex = this.todoItems.indexOf(item)
    this.todoItems.splice(itemIndex, 1)
  }

}
