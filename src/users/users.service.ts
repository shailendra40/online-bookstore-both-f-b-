import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findOne(id: string) {
    // Implement find user profile logic here
    return `User with id ${id}`;
  }
}
