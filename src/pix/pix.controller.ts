import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PixService } from './pix.service';

@Controller('pix')
export class PixController {
  constructor (private pixService: PixService) {}

  @Post('create')
  createPix() {
    return 'Pix created!';
  }

  @Get('/')
  getPixes() {
    return 'All pixes';
  }

  @Put('/')
  editPix() {
    return 'Pix edited';
  }

  @Delete('/')
  deletePix() {
    return 'Pix deleted';
  }
}
