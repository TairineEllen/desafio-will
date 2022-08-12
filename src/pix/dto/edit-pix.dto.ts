import { IsPixValid } from '../validator/CustomPix';
import { IsString } from 'class-validator';

export class EditPixDto {
  @IsPixValid({
    message: 'Chave pix inválida! Insira email ou CPF válido'
  })
  @IsString()
  key: string;
}
