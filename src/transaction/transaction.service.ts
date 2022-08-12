import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TransactionDto } from './dto/transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}
  async createTransaction(dto: TransactionDto) {
    const pix = await this.prisma.pix.findFirst({
      where: {
        key: dto.key
      }
    });

    if (!pix) {
      throw new NotFoundException('Chave não cadastrada na instituição Will Bank');
    }
    
    try {
      const transaction = await this.prisma.transaction.create({
        data: {
          key: dto.key,
          amount: dto.amount
        }
      });
  
      return transaction;
    } catch (error) {     
      throw error;
    } 
  }
}
