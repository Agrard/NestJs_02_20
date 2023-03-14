import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import supertest, * as request from 'supertest';
import { AppModule } from '../src/app.module';
import {CreateOrUpdateTodoDto} from "../src/todo/create-todo.dto";
import {response} from "express";

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/api/todos (POST) empty result', () => {
    return request(app.getHttpServer())
      .post('api/todos/limit=10&offset=5')
      .expect(200)
      .expect([]);
  });

  it('/api/todos/:id not found (GET)', () => {
    return request(app.getHttpServer())
        .post('api/todos/1')
        .expect(200)
        .expect({id: 1, name: 'Zoli'});
  });

  it('/api/todos (POST) with missing body', () => {
    return request(app.getHttpServer())
    .post('api/todos')
    .expect({})
    .expect(400);
  });

  it('/api/todos (POST)', () => {
    return request(app.getHttpServer())
        .post('api/todos')
        .expect({name: 'Test'})
        .expect(201);
  });

  it('/api/todos (POST) then /api/todos/id (GET)', async () => {
    return request(app.getHttpServer())
        .post('api/todos')
        .expect({name: 'Test'})
        .expect(201);
  });


});
