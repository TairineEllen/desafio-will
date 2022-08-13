import { Test } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { PixDto } from './dto';
import { PixController } from './pix.controller';
import { PixService } from './pix.service';

describe('Pix Controller', () => {
  let pixController: PixController;
  let pixService: PixService

  beforeAll(async () => {
    const PixServiceProvider = {
      provide: PixService,
      useFactory: () => ({
        createPix: jest.fn(() => []),
        getPixes: jest.fn(() => []),
        getPixById: jest.fn(() => { }),
        editPix: jest.fn(() => { }),
        deletePix: jest.fn(() => { })
      })
    };

    const moduleRef = await Test.createTestingModule({
      controllers: [PixController],
      providers: [PixService, PixServiceProvider]      
    }).compile();

    pixService = moduleRef.get<PixService>(PixService);
    pixController = moduleRef.get<PixController>(PixController);
  });

  describe('createPix', () => {
    it('should create a pix', async () => {
     const dto: PixDto = {
      key: 'email@will.com'
     }
     expect(pixController.createPix(dto)).not.toEqual(null);
    });
  });

  it('should create a pix', () => {
    const dto: PixDto = {
      key: 'teste@teste.com'
    };
    expect(pixController.createPix(dto)).not.toEqual(null);
  });

  it('should list all pixes', () => {
    pixController.getPixes();
    expect(pixService.getPixes).toHaveBeenCalled();
  })

 

  



  
})