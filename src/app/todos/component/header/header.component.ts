import { TodoService } from './../../service/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  text:string='';
  constructor(private todoservice:TodoService) { }

  ngOnInit(): void {
  }

  changetext(event:Event){
    let target=event.target as HTMLInputElement;
    this.text=target.value;
      
  }

  addtodo():void{
    if(this.text.length!=0){
    this.todoservice.setTodo(this.text);
    this.text=' ';
    }
    console.log(this.text.length)
    
  }

}
