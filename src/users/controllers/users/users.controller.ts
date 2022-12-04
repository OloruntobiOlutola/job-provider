import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { CreateUser } from 'src/utils/types/create-user.types';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserType: CreateUser) {
    return this.usersService.createUser(createUserType);
  }
}
