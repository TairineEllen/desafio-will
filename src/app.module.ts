import { Module } from '@nestjs/common';
import { PixModule } from './pix/pix.module';
import { PrismaModule } from './prisma/prisma.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [PixModule, PrismaModule, TransactionModule],
})
export class AppModule {}
