// import { Injectable } from '@nestjs/common';

import { Injectable } from "@nestjs/common";

// @Injectable()
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello yassine ';
  }
}
