import { TodoInterface } from './../../types/todo.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos-singletodo',
  templateUrl: './singletodo.component.html',
  styleUrls: ['./singletodo.component.scss']
})
export class SingletodoComponent implements OnInit {
  @Input('singletodo')
  todoProps!: TodoInterface;

  constructor() { }



  ngOnInit(): void {
  }

}
