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
  notodosclass$:Observable<boolean>
  isAlltodoSelected$:Observable<boolean>

  constructor(private todoservice:TodoService) { 
    //to check if theere are no todo then main blocks comes empty
    this.notodosclass$=this.todoservice.todo$.pipe(
      map(notodo=>notodo.length===0)
    );

    // to check if every todo is checked or not if it is , then pointer will greyed out
    this.isAlltodoSelected$=this.todoservice.todo$.pipe(
      map((isAlltodo)=> isAlltodo.every((todo)=>todo.isCompleted))
    )

    this.visibleTodo$=combineLatest([
      this.todoservice.todo$,
      this.todoservice.filter$ 
    ])
      .pipe(
      map(([todos,filter]:[TodoInterface[],FilterEnum])=>{
        if(filter === FilterEnum.active){
          return todos.filter(todo=> !todo.isCompleted)
        }else if(filter === FilterEnum.completed){
          return todos.filter(todo=> todo.isCompleted)
        }
        return todos
      })
    )

  }
  toggleAlltodos(event:Event):void{
   const target=event.target as HTMLInputElement;
   this.todoservice.toggleAll(target.checked);
  }
}

 


