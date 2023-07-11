import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ActorsModule } from './../src/actors.module';

describe('ActorsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ActorsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/actors (GET)', () => {
    return request(app.getHttpServer())
      .get('/actors')
      .expect(200)
      .expect((res) => {
        expect(typeof res.body).toBe('object');
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
