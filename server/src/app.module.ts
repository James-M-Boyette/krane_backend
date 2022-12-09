import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  // 'Module' decorator, which organizes code into smaller chunks & allows for lazy-loading in serverless environments
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
