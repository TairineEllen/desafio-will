import { IsNotEmpty, IsString } from 'class-validator';
import { IsPixValid } from '../decorator/ValidatePix';

export class PixDto {
  @IsPixValid({
    message: 'Chave pix inválida! Insira email ou CPF válido'
  })
  @IsString()
  @IsNotEmpty()
  key: string;
}
