import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import {TasksService} from './tasks.service';
import { TaskStatus} from './task-status.enum'
import {CreateClassDTO} from './dto/create.task.dto';
import {GetTasksFilterDTO} from './dto/get-tasks-filter.dto';
import {TaskValidationaPipe} from './pipes/task-status-validation.pipe';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService){}

  // @Get()
  // getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDTO): Task[]{
  //   if(Object.keys(filterDto).length){
  //     return this.taskService.getTasksWithFilter(filterDto)
  //   }
  //   return this.taskService.getAllTasks()
  // }

  // @Post() 
  // @UsePipes(ValidationPipe)
  // createTask(@Body() createTaskDto: CreateClassDTO):Task{
  //   return this.taskService.createTask(createTaskDto)
  // }

  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Task{
  //   return this.taskService.getTaskById(id)
  // }
  
  // @Delete('/:id')
  // deleteTask(@Param('id') id: string){
  //   return this.taskService.deleteTask(id)
  // }
  
  // @Patch('/:id/status')
  // updtateTaskStatus(@Param('id', TaskValidationaPipe) id: string, @Body('status') status: TaskStatus): Task{
  //   return this.taskService.updtateTaskStatus(id, status)
  // }
}
