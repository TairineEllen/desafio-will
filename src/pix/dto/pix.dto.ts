import { IsNotEmpty, IsString } from 'class-validator';
import { IsPixValid } from '../validator/CustomPix';

export class PixDto {
  @IsPixValid({
    message: 'Chave pix inválida! Insira email ou CPF válido'
  })
  @IsString()
  @IsNotEmpty()
  key: string;
}

