import { IsPixValid } from '../decorator/ValidatePix';
import { IsString } from 'class-validator';

export class EditPixDto {
  @IsPixValid({
    message: 'Invalid pix! Please enter CPF or email',
  })
  @IsString()
  key: string;
}
