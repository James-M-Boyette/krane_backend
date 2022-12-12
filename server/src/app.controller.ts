import { Controller, Get, Body, Post, HttpCode, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { BlogPost } from '@prisma/client';

@Controller() // Decorator
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   // ⬆️ Controller Method 'getHello' ⬆️
  //   return this.appService.getHello();
  // }

  @HttpCode(200)
  @Get()
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Get('/api/post')
  getPosts() {
    return this.appService.getBlogPosts();
  }

  @Post('/api/post')
  async createPost(@Body() blogPostData: BlogPost): Promise<BlogPost> {
    return this.appService.createBlogPost(blogPostData);
  }
}
