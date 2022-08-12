import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class PixDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  key: string;
}
