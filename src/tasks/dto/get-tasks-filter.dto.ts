import {IsIn, IsOptional} from "class-validator";
import {TaskStatus} from "../task.model";

export class GetTasksFilterDTO{
  
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status: TaskStatus

  @IsOptional()
  search: string
}
