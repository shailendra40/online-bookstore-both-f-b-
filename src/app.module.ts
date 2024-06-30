import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AuthModule, BooksModule, UsersModule, MongooseModule.forRoot('mongodb://localhost/online-bookstore'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
