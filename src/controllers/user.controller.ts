import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { UserService } from '../services/user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): any {
    return this.userService.getUser();
  }
}
