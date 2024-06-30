// src/books/schemas/book.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  publishedDate: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
