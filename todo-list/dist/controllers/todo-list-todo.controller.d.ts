import { Count, Filter, Where } from '@loopback/repository';
import { Todo } from '../models';
import { TodoListRepository } from '../repositories';
export declare class TodoListTodoController {
    protected todoListRepo: TodoListRepository;
    constructor(todoListRepo: TodoListRepository);
    create(id: string, todo: Todo): Promise<Todo>;
    find(id: string, filter?: Filter): Promise<Todo[]>;
    patch(id: string, todo: Partial<Todo>, where?: Where): Promise<Count>;
    delete(id: string, where?: Where): Promise<Count>;
}
