import { TodoService } from './service/todo.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './component/todo/todo.component';
import { HeaderComponent } from './component/header/header.component';
import { MainComponent } from './component/main/main.component';

const rout:Routes=[
  {path:'', component:TodoComponent}
];


@NgModule({
  declarations: [
    TodoComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rout)
  ],
  providers:[
    TodoService
  ]
})
export class TodosModule { }
