import { repository, Filter } from '@loopback/repository';
import { TodoListRepository } from '../repositories';
import { post, param, requestBody, getFilterSchemaFor, get } from '@loopback/rest';
import { Todo } from '../models';


export class TodoListTodoController {
  constructor(
    @repository(TodoListRepository) protected todoListRepo: TodoListRepository,
  ) { }

  @post('/todo-lists/{id}/todos')
  async create(@param.path.number('id') id: number, @requestBody() todo: Todo) {
    return await this.todoListRepo.todos(id).create(todo);
  }

  @get('/todo-lists/{id}/todos', {
    responses: {
      '200': {
        description: 'Array of Todos model instances in todo-list{id}',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Todo } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Todo)) filter?: Filter,
  ): Promise<Todo[]> {
    return await this.todoListRepo.todos(id).find(filter);
  }
}
