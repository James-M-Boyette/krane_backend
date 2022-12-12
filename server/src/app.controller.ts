import { Controller, Get, Body, Post, HttpCode, Param } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { AppService } from './app.service';
import { PostsService } from './posts/posts.service';
import { BlogPost } from '@prisma/client';

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

  /**
   * ! What to do next:
   * > Write a route + logic that will store a post from the FE to the database
   * > Write a route + logic that will return all posts from the DB to the FE
   * > Write a route + logic that will return one specific post from the DB to the FE (THIS MAY BE UNNECESSARY)
   */

  // @Get('/post')
  // @Get('/post:id')
  // @Get('/api/posts')
  @Get('/api/post')
  getPosts() {
    return this.appService.getPosts();
  }
  @Get('/api/post:id')
  getPost(@Param('id') id: string) {
    return this.appService.getPost();
  }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.postsService.findOne(+id);
  // }

  // @Post('/api/post')
  // createPost(@Body() createPostDto: CreatePostDto) {
  //   return this.appService.createPost(createPostDto);
  // }
  @Post('/api/post')
  async createTodo(@Body() postData: BlogPost): Promise<BlogPost> {
    console.log(`data (app.controller): ${postData.textBody}`);
    return this.appService.createPost(postData);
  }
}
