import { BadRequestException, PipeTransform} from "@nestjs/common";
import {TaskStatus} from "../task.model";

export class TaskValidationaPipe implements PipeTransform{

  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE
  ]

  transform(value: any){
    value = value.toUpperCase()

    if(!this.isStatusValid(value)){
      throw new BadRequestException()
    }
    return value
  }

  private isStatusValid(status: any){
    const index = this.allowedStatuses.indexOf(status)
    return index !== -1
  }
}
