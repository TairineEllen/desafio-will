import { Module } from '@nestjs/common';
import { PixController } from './pix.controller';
import { PixService } from './pix.service';

@Module({
  controllers: [PixController],
  providers: [PixService]
})
export class PixModule {}
