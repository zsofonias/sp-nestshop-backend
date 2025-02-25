import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { CustomLoggerModule } from './custom-logger/custom-logger.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CustomLoggerModule,
    UserModule,
    CustomLoggerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
