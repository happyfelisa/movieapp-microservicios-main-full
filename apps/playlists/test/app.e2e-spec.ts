import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { PlaylistsModule } from '../src/playlists.module';

describe('PlaylistsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [PlaylistsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/playlists (GET)', () => {
    return request(app.getHttpServer())
      .get('/playlists')
      .expect(200)
      .expect((res) => {
        expect(typeof res.body).toBe('object');
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
