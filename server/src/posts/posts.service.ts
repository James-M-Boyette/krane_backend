import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}
  // CRUD Operations
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll() {
    // return `This action returns all posts`;
    return this.prisma.post.findMany();
  }

  findOne(id: number) {
    // return `This action returns a #${id} post`;
    return this.prisma.post.findUnique({ where: { id } });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
