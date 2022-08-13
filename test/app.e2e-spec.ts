import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing'
import * as request from 'supertest';
import { PrismaService } from '../src/prisma/prisma.service';
import { AppModule } from '../src/app.module';
import { PixDto } from 'src/pix/dto';
import { assert } from 'console';
import { doesNotMatch } from 'assert';
import exp from 'constants';


describe('Test end 2 end', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

    await app.init();
    await app.listen(3333);

    prisma = app.get(PrismaService);

    await prisma.cleanDb();    
  });

  afterAll(() => {
    app.close();
  });

  describe('Pix tests', () => {
    describe('Create a pix', () => {
      const dto: PixDto = {
        key: 'pix@will.com'
      }
      it('should create a pix', (done) => {
        request(app.getHttpServer()).post('/pix/create').send(dto).expect(201).end((error, res) => {
          if (error) return done(error);
          return done();
        });
    });

    });

    describe('Get all pixes', () => {
      it('should list all pixes', async () => {
        const response = await request(app.getHttpServer()).get('/pix/');
        expect(response.status).toEqual(200);
        expect(response.body[0].key).toEqual('pix@will.com');
      });
    });
   
    
  });

  describe('Transactions tests', () => {});
})