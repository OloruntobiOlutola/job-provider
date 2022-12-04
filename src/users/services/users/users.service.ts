import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/users.schema';
import CreateUserDto from 'src/users/dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userRepository: Model<UserDocument>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = await new this.userRepository({ ...createUserDto }).save();

    const output = {
      status: 'success',
      user,
    };

    return output;
  }
}
