import { TodoService } from './../../service/todo.service';
import { TodoInterface } from './../../types/todo.interface';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todos-singletodo',
  templateUrl: './singletodo.component.html',
  styleUrls: ['./singletodo.component.scss']
})
export class SingletodoComponent implements OnInit ,OnChanges{
 
  @Input('todo')
  todoProps!: TodoInterface;

  @Input('isEditing')
  isEditingProps!:boolean;

  @Output('setEditingId') setEditingIdEvent: EventEmitter<
    string | null
  > = new EventEmitter();

  @ViewChild('textinput')
  textinput!: ElementRef;

  editingText:string=" ";
  
  constructor(private todoservice:TodoService) { }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes,'changes');
      if(changes['isEditingProps'].currentValue){
        setTimeout(()=>{
          this.textinput.nativeElement.focus()
        },0)
      }
    
  
  }
  
  ngOnInit(): void {
    this.editingText=this.todoProps.text;
  }
  
  
  setTodoInEditMode(): void {
    console.log('setTodoInEditMode');
    this.setEditingIdEvent.emit(this.todoProps.id);
  }

  removeTodo():void{
    this.todoservice.removetodo(this.todoProps.id);
  }

  toggleTodo():void{
    this.todoservice.toggletodo(this.todoProps.id);
  }

  changeText(event:Event):void{
    const target=event.target as HTMLInputElement;
    this.editingText=target.value;

  }

  changeTodo(){
    this.todoservice.changetodo(this.todoProps.id,this.editingText);
    this.setEditingIdEvent.emit(null);
    
  }
}
