import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { Post, BlogPost, Prisma } from '@prisma/client';
import { text } from 'stream/consumers';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHealth(): string {
    return 'Hello! The Server is up and running 🤖';
  }
  getBlogPosts(): any {
    return this.prisma.blogPost.findMany();
  }

  async createBlogPost(data: BlogPost): Promise<BlogPost> {
    return this.prisma.blogPost.create({
      data,
    });
  }
}
