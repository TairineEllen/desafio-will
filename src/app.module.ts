import { Module } from '@nestjs/common';
import { PixModule } from './pix/pix.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PixModule, PrismaModule],
})
export class AppModule {}
