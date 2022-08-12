import { Module } from '@nestjs/common';
import { PixModule } from './pix/pix.module';

@Module({
  imports: [PixModule]
})
export class AppModule {}
