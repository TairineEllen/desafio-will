import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { PixDto } from './dto';
import { EditPixDto } from './dto/edit-pix.dto';

@Injectable()
export class PixService {
  constructor(private prisma: PrismaService) {}

  async createPix(dto: PixDto) {
    try {
      const pix = await this.prisma.pix.create({
        data: {
          key: dto.key,
        },
      });
      return pix;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Pix already registered');
        }
      }
      throw error;
    }
  }

  async getPixes() {
    const pixes = await this.prisma.pix.findMany();
    return pixes;
  }

  async getPixById(pixId: number) {
    const pix = await this.prisma.pix.findFirst({
      where: {
        id: pixId,
      },
    });

    if (!pix) {
      throw new NotFoundException('Pix not found');
    }

    return pix;
  }

  async editPix(pixId: number, dto: EditPixDto) {
    const pix = await this.prisma.pix.findFirst({
      where: {
        id: pixId,
      },
    });

    if (!pix) {
      throw new NotFoundException('Pix not found');
    }

    const pixUdpated = await this.prisma.pix.update({
      where: {
        id: pixId,
      },
      data: {
        ...dto,
      },
    });

    return pixUdpated;
  }

  async deletePix(pixId: number) {
    const pix = await this.prisma.pix.findFirst({
      where: {
        id: pixId,
      },
    });

    if (!pix) {
      throw new NotFoundException('Pix not found');
    }

    await this.prisma.pix.delete({
      where: {
        id: pixId,
      },
    });
  }
}
