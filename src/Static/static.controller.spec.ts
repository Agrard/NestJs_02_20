import { Test, TestingModule } from '@nestjs/testing';
import { StaticController } from './static.controller';
import { StaticService } from './static.service';

describe('AppController', () => {
  let staticController: StaticController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StaticController],
      providers: [StaticService],
    }).compile();

    staticController = app.get<StaticController>(StaticController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(staticController.getHello()).toBe('Hello World!');
    });
  });
});
