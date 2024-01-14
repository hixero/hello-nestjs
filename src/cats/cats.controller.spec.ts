import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

describe('CatsController', () => {
  let controller: CatsController;
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    controller = module.get<CatsController>(CatsController);
    service = module.get<CatsService>(CatsService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('create', () => {
    it('should create a new cat', async () => {
      const createCatDto: CreateCatDto = {
        name: 'Garfield',
        age: 3,
        breed: 'Persian',
      };
      jest.spyOn(service, 'create');

      await controller.create(createCatDto);

      expect(service.create).toHaveBeenCalledWith(createCatDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const cats: Cat[] = [
        { name: 'Garfield', age: 3, breed: 'Persian' },
        { name: 'Tom', age: 2, breed: 'Siamese' },
      ];

      cats.forEach((cat) => controller.create(cat));

      service.findAll = jest.fn().mockImplementation(async () => cats);

      const result = await controller.findAll();

      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual(cats);
    });
  });
});
