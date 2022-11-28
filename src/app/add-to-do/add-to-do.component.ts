import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent {
  userId =""
  id =""
  title=""
  completed=""

  add=()=>
  {
    let addData:any = {"userId":this.userId,"id":this.id,"title":this.title,
                        "completed":this.completed}

    console.log(addData)
  }
}
