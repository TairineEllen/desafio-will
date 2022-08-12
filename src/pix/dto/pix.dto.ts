import { IsNotEmpty, IsString } from 'class-validator';
import { IsPixValid } from '../decorator/ValidatePix';

export class PixDto {
  @IsPixValid({
    message: 'Invalid pix! Please enter CPF or email',
  })
  @IsString()
  @IsNotEmpty()
  key: string;
}
