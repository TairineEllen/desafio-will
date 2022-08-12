import { Controller, Delete, Get, Post, Put, Body } from '@nestjs/common';
import { PixService } from './pix.service';
import { Request } from 'express';
import { PixDto } from './dto';

@Controller('pix')
export class PixController {
  constructor (private pixService: PixService) {}

  @Post('create')
  createPix(@Body() dto: PixDto) {
    console.log('AQUI o', dto)
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
