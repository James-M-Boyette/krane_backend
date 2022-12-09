import { Controller, Get, Body, Post, HttpCode, Param } from '@nestjs/common';
import { AppService } from './app.service';

/**
 ** This is Nest's 'controller' ...
 *   - Anything with `@Controller` initializes a Nest controller
 *   - Handles incoming requests & their responses (like any other controller)
 */
@Controller() // Decorator
export class AppController {
  constructor(private readonly appService: AppService) {} // This imports the `app.service.ts` as a 'Provider' of this class's constructor

  @Get() // Decorated with HTTP Verb (GET, POST, PATCH, etc.)
  getHello(): string {
    // ⬆️ Controller Method 'getHello' ⬆️
    return this.appService.getHello(); // Performs & returns appService's `getHello()` method (which, in this case, returns a string ...); this is the response body (even if injected from another service)
  }

  @HttpCode(200)
  @Get('/health')
  getHealth(): string {
    return this.appService.getHealth();
  }

  // @Get('/post')
  // @Get('/post:id')
  @Get('/api/posts')
  getPosts(@Body() body, @Param('id') id): string {
    return this.appService.getPosts();
  }
  @Get('/api/post:id')
  getPost(@Body() body, @Param('id') id): string {
    return this.appService.getPost();
  }
  @Post('/api/post:id')
  createPost(@Body() body, @Param('id') id): string {
    return this.appService.createPost();
  }
}
