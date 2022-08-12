import { IsPixValid } from '../decorator/ValidatePix';
import { IsString } from 'class-validator';

export class EditPixDto {
  @IsPixValid({
    message: 'Chave pix inválida! Insira email ou CPF válido'
  })
  @IsString()
  key: string;
}
