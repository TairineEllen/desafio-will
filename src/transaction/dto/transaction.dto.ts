import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IsPixValid } from 'src/pix/decorator/ValidatePix';

export class TransactionDto {
  @IsPixValid({
    message: 'Chave pix inválida! Insira email ou CPF válido',
  })
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
