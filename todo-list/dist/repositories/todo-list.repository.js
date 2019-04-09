"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const todo_repository_1 = require("./todo.repository");
let TodoListRepository = class TodoListRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, todoRepositoryGetter) {
        super(models_1.TodoList, dataSource);
        this.todoRepositoryGetter = todoRepositoryGetter;
        this.todos = this.createHasManyRepositoryFactoryFor('todos', todoRepositoryGetter);
    }
};
TodoListRepository = __decorate([
    __param(0, core_1.inject('datasources.db')),
    __param(1, repository_1.repository.getter(todo_repository_1.TodoRepository)),
    __metadata("design:paramtypes", [repository_1.juggler.DataSource, Function])
], TodoListRepository);
exports.TodoListRepository = TodoListRepository;
//# sourceMappingURL=todo-list.repository.js.map