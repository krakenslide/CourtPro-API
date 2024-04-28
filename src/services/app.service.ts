import { Inject, Logger } from '@nestjs/common';
export class AppService {
  constructor(@Inject(Logger) private readonly logger: Logger) {}

  getHello(): string {
    this.logger.log('Hello world logged');
    return 'Hello World!';
  }
}
