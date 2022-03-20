import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterEnum } from '../types/filter.enum';
import { TodoInterface } from '../types/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todo$=new BehaviorSubject<TodoInterface[]>([]);
  filter$=new BehaviorSubject<FilterEnum>(FilterEnum.all)

  constructor() { }

  setTodo(text:string):void{
    const newtodo:TodoInterface={
      text,
      isCompleted:false,
      id:Math.random().toString(16)
    };
    const updatedtodo=[...this.todo$.getValue(),newtodo]
    this.todo$.next(updatedtodo);
  }

  toggleAll(isCompleted:boolean):void{
    const updatedtodo=this.todo$.getValue().map((todo)=>{
      return{
        ...todo,
        isCompleted
      };
    })
    console.log(updatedtodo,'updatetodo');
  }
}
