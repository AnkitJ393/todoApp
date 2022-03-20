import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  notodosclass$: Observable<boolean>;
  activeCount$:Observable<number>;
  itemsLest$:Observable<string>;

  constructor(private todoservice:TodoService) { 
    this.notodosclass$=this.todoservice.todo$.pipe(
      map(notodo=>notodo.length===0)
    );

    this.activeCount$=this.todoservice.todo$.pipe(
      map((todos)=>
        todos.filter(todo=> !todo.isCompleted).length
      )
    )
     
    this.itemsLest$=this.activeCount$.pipe(
      map((activeCount)=>`item${activeCount!=1?'s':''} left`)
    )
    
  
  }

  ngOnInit(): void {
  }

}
