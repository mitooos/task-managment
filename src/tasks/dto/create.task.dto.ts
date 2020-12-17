import {IsNotEmpty} from 'class-validator'

export class CreateClassDTO{
  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  description: string
}
