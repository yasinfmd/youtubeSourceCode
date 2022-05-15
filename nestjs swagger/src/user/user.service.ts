import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  create(): Promise<User> {
    const user = this.userRepo.create({
      email: 'abc@mail.com',
      name: 'Ali',
      surname: 'Koç',
    });
    return this.userRepo.save(user);
  }
  findAll(): Promise<Array<User>> {
    return this.userRepo.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepo.findOne(id);
  }

  async delete(id): Promise<string> {
    await this.userRepo.delete({ id });
    return 'Silindi';
  }
}
