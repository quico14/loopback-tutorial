import { Entity, model, property } from '@loopback/repository';
import { TodoList } from './todo-list.model';

@model()
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property()
  todoListId: number;


  constructor(data?: Partial<Todo>) {
    super(data);
  }

  @property({
    type: 'string',
  })
  // ? after the name means non-required
  remindAtAddress?: string; // address,city,zipcode

  @property({
    type: 'string',
  })
  remindAtGeo?: string; // latitude,longitude
}
