import { Module } from '@nestjs/common';
import { PixModule } from './pix/pix.module';
import { PrismaModule } from './prisma/prisma.module';
import { TransactionModule } from './transaction/transaction.module';
import { ServiceController } from './service/service.controller';

@Module({
  imports: [PixModule, PrismaModule, TransactionModule],
  controllers: [ServiceController],
})
export class AppModule {}
