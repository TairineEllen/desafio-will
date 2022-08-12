import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransactionService {
  constructor(private prismaService: PrismaService) {}

  createTransaction(dto) {
    console.log(dto)
    return { message: 'New transaction'};
  }
}
