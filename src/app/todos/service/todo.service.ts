import { FilterEnum } from './../types/filter.enum';
import { Injectable } from '@angular/core';
import { BehaviorSubject, retry } from 'rxjs';
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
   
  }

  changefilter(filtername:FilterEnum):void{
    this.filter$.next(filtername);
  }

  changetodo(id:string,text:string):void{
    const updatedtodo=this.todo$.getValue().map((todo)=>{
      if(todo.id===id){
        return{
          ...todo,
          text
        };
      }
      return todo;
    });
    this.todo$.next(updatedtodo);
    console.log('changed todo')
  }

  removetodo(id:string):void{
    const  updatedtodo=this.todo$.getValue().filter((todo)=>todo.id!==id)
    this.todo$.next(updatedtodo);
    console.log("removetodo")
  }  

  toggletodo(id:string):void{
    const updatedtodo=this.todo$.getValue().map((todo)=>{
      if(id==todo.id){
        return{
          ...todo,
          isCompleted: !todo.isCompleted,
        }
      }
      return todo
      }

      )
      this.todo$.next(updatedtodo);
  }
}
