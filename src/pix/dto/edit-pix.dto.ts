import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class EditPixDto {
  @IsEmail()
  @IsString()
  key: string
}