import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PixDto } from './dto';
import { EditPixDto } from './dto/edit-pix.dto';

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

  async getPixById(pixId: number) {
    const pix = await this.prisma.pix.findFirst({
      where: {
        id: pixId
      }
    });

    return pix;
  }

  async editPix(pixId: number, dto: EditPixDto) {
    const pixUdpated = await this.prisma.pix.update({
      where: {
        id: pixId
      },
      data: {
        ...dto
      }
    });

    return pixUdpated;
  }

  async deletePix(pixId: number) {
    await this.prisma.pix.delete({
      where: {
        id: pixId
      }
    });
  }
}
