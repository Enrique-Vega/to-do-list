import { Component } from '@angular/core';
import { Component,trigger,animate,style,transition,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger("moveInLeft",[
      transition("void=> *",[style({transform:"translateX(300px)"}),
        animate(200,keyframes([
          style({transform:"translateX(300px)"}),
          style({transform:"translateX(0)"})
  
           ]))]),
      transition("*=>void",[style({transform:"translateX(0px)"}),
        animate(100,keyframes([
          style({transform:"translateX(0px)"}),
          style({transform:"translateX(300px)"})
           ]))])    
    ])
 ]
})

export class AppComponent {
  todoArray = []

  // Add value function
  addTodo = (value) => {
    this.todoArray.push(value)
    console.log(this.todoArray)
  }

  // delete item function
  deleteItem = (todo) => {
    console.log("delete item")
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(todo== this.todoArray[i]){
       this.todoArray.splice(i,1)
      }
     }
  }
  // submit Form
  todoSubmit(value:any){
    if(value!=="") {
      this.todoArray.push(value.todo)
      //this.todoForm.reset()
    } else {
      alert('Field required **')
    }
  }

}

