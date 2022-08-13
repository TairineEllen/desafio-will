import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IsPixValid } from '../../pix/decorator/ValidatePix';

export class TransactionDto {
  @IsPixValid({
    message: 'Invalid pix! Please enter CPF or email',
  })
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
