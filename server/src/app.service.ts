import { Injectable } from '@nestjs/common';

@Injectable() // Decorator indicating a 'Provider'
export class AppService {
  // 'getHello()` = basic, pre-packaged route
  getHello(): string {
    return 'Hello World! 🌍';
  }
  // 'getHealth()` = first test route by me
  getHealth(): string {
    return 'Hello! The Server is up and running 🤖';
  }
  // 'getSomething()` = route that *should* fetch data, once we figure that out ...
  getPosts(): any {
    return `This will return MANY posts ...`;
  }
  getPost(): any {
    return `This will return ONE post ...`;
  }
  createPost(): any {
    return `This will create a post in the DB ...`;
  }
}
