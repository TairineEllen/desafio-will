import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IsPixValid } from 'src/pix/validator/CustomPix';
import { isFloat32Array } from 'util/types';


export class TransactionDto {
  @IsPixValid({
    message: 'Chave pix inválida! Insira email ou CPF válido'
  })
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsNumber()
  amount: number
}

