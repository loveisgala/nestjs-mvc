import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): string[] {
    // here will connect with db
    return ['john', 'vera', 'carl'];
  }
}
