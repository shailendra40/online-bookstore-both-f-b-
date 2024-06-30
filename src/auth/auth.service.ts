import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(loginDto: any) {
    // Implement login logic here
    return 'Login successful';
  }

  async register(registerDto: any) {
    // Implement registration logic here
    return 'Registration successful';
  }
}
