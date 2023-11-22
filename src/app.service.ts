import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  const b:string = "";
  getHello(): string {
    return 'Bienvenidos a mi mundo';
  }
}
