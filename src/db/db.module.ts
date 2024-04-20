import { Module } from '@nestjs/common';
import { PG_CONNECTION } from '../constants';
import { Pool } from 'pg';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: PG_CONNECTION,
      useFactory: (configService: ConfigService) => {
        const host = configService.get<string>('DATABASE_HOST', 'localhost');
        const user = configService.get<string>('DATABASE_USER', 'postgres');
        const database = configService.get<string>('DATABASE_NAME', 'name');
        const password = configService.get<string>(
          'DATABASE_PASSWORD',
          'password',
        );
        const port = configService.get<number>('DATABASE_PORT', 5432);
        const config = {
          user,
          host,
          database,
          password,
          port,
        };
        return new Pool(config);
      },
      inject: [ConfigService],
    },
  ],
  exports: [PG_CONNECTION],
})
export class DbModule {}
