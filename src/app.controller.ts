import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// references http://localhost:3000
@Controller()
export class AppController {
  // service: AppService
  constructor(private readonly appService: AppService) {}

  // http://localhost:3000/users
  @Get('users')
  getUsers(): string[] {
    // getUsers() will be created at app.service.ts
    return this.appService.getUsers();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
