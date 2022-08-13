import { Test } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { PixController } from './pix.controller';
import { PixService } from './pix.service';

describe('Pix Controller', () => {
  let pixController: PixController;
  let pixService: PixService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PixController],
      providers: [PixService, PrismaService]
      
    }).compile();

    pixService = moduleRef.get<PixService>(PixService);
    pixController = moduleRef.get<PixController>(PixController);
  });

  describe('getPixes', () => {
    it('should return all pixes', async () => {
      const response = ['test'] as any;
      jest.spyOn(pixService, 'getPixes').mockImplementation(() => response);
      expect(await pixController.getPixes()).toBe(response);
    });
  });
})