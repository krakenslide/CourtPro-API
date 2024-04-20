import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { DbModule } from './db/db.module';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { ConfigModule } from '@nestjs/config';
import { configSchema } from './config/config.schema';

@Module({
  imports: [ConfigModule.forRoot({ validationSchema: configSchema }), DbModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
