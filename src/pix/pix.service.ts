import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PixDto } from './dto';

@Injectable()
export class PixService {
  constructor(private prisma: PrismaService) {}

  async createPix(dto: PixDto) {
    const pix = await this.prisma.pix.create({
      data: {
        key: dto.key
      }
    });
    return pix;
  }

  async getPixes() {
    const pixes = await this.prisma.pix.findMany();
    return pixes;
  }

  editPix() {}

  deletePix() {}
}
