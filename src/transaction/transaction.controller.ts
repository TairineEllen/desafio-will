import { Body, Controller, Post } from '@nestjs/common';
import { TransactionDto } from './dto';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Post('new')
  createTransaction(@Body() dto: TransactionDto) {
    return this.transactionService.createTransaction(dto)
  }
}
