import { Controller, Delete, Get, Post, Put, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PixService } from './pix.service';
import { PixDto } from './dto';
import { EditPixDto } from './dto/edit-pix.dto';

@Controller('pix')
export class PixController {
  constructor (private pixService: PixService) {}

  @Post('create')
  createPix(@Body() dto: PixDto) {    
    return this.pixService.createPix(dto);
  }

  @Get()
  getPixes() {
    return this.pixService.getPixes();
  }

  @Get(':id')
  getPixById(@Param('id', ParseIntPipe) pixId: number) {
    return this.pixService.getPixById(pixId);
  }

  @Put(':id')
  editPix(@Param('id', ParseIntPipe) pixId: number, @Body() dto: EditPixDto) {
    return this.pixService.editPix(pixId, dto);
  }

  @Delete(':id')
  deletePix(@Param('id', ParseIntPipe) pixId: number) {
    return this.pixService.deletePix(pixId);
  }
}
