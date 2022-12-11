import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PrismaService } from './prisma/prisma.service';
import { Post, BlogPost, Prisma } from '@prisma/client';

@Injectable() // Decorator indicating a 'Provider'
export class AppService {
  constructor(private prisma: PrismaService) {} // Is this necessary?
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
    // return `This will return MANY MANY MANY posts ...`;
    // return this.prisma.post.findMany({ where: { published: true } });
    // return this.prisma.post.findMany();
    return this.prisma.blogPost.findMany();
  }
  getPost(): any {
    return `This will return ONE post ...`;
    // return this.prisma.post.findUnique({ where: { id } });
  }
  // createPost(createPostDto: CreatePostDto) {
  //   // return `This will create a post in the DB ...`;
  //   return this.prisma.post.create({ data: createPostDto });
  // }
  async createPost(data: BlogPost): Promise<BlogPost> {
    console.log(`data (app.service): ${data}`);
    return this.prisma.blogPost.create({
      data,
    });
  }
}
