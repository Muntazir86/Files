import { Employee } from './../employee';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  faEdit = faEdit;
  faTrash = faTrash;

  @Input() employee?: Employee;
  @Output() removeEmployee = new EventEmitter();

  onRemove(employee: any){
    this.removeEmployee.emit(employee);
  }
}
