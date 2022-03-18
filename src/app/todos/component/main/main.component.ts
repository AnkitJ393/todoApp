import { map } from 'rxjs/operators';
import { TodoService } from './../../service/todo.service';
import { TodoInterface } from './../../types/todo.interface';
import { Observable, combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'app-todo-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  {
  visibleTodo$:Observable<TodoInterface[]>

  constructor(private todoservice:TodoService) { 
    this.visibleTodo$=combineLatest([
      this.todoservice.todo$,
      this.todoservice.filter$ 
    ])
  }

    // .pipe(
    //   map(([todos,filter]:[TodoInterface[],FilterEnum])=>{
    //     console.log(todos,filter)
    //     return [];
    //   })
    // )
  }

 


