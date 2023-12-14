import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { UserDto } from '../dto/user.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  public async  findAll(body : UserDto): Promise<UserEntity[]> {
    try {
      return await this.userRepository.save(body);
    }
    catch (error) {
      throw new Error(error);
    }
}
