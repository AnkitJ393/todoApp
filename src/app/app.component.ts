import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoapp';
  list:any[]=[] ;
  constructor(){

  }
  addtask(task:string){
    this.list.push({id:this.list.length,name:task})
  }

  delete(item:number){
    // console.log(id)
   this.list= this.list.filter(id=>id.id!=item);
  }
}
