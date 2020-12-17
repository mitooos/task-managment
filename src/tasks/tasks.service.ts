import { Injectable, NotFoundException } from '@nestjs/common';
import {Task, TaskStatus} from './task.model';
import {v4 as uuid} from 'uuid'
import {CreateClassDTO} from './dto/create.task.dto';
import {GetTasksFilterDTO} from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[]  = []

  getAllTasks(): Task[] {
    return this.tasks
  }
  
  getTasksWithFilter(filterDto: GetTasksFilterDTO): Task[]{
    const {status, search} = filterDto
    let tasks = this.tasks
    
    if(status){
      tasks = tasks.filter(item => item.status === status)
    }

    if(search){
      tasks = tasks.filter(item => item.title.includes(search) || item.description.includes(search))
    }

    
    return tasks
  }

  createTask(createTaskDto: CreateClassDTO):Task{
    const {title, description} = createTaskDto
    let task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN
    }
    this.tasks.push(task)
    return task 
  }

  getTaskById(id: string): Task{
    const found = this.tasks.find(element => element.id === id)
    if(!found){
     throw new NotFoundException('task with id: ' + id + ' not found')
    }
    return found
  }

  deleteTask(id: string){
    this.getTaskById(id)
    this.tasks.splice(this.tasks.findIndex(i => i.id === id), 1)
  }

  updtateTaskStatus(id: string, status: TaskStatus):Task{
    let task = this.getTaskById(id)
    task.status = status
    return task
  }
}
