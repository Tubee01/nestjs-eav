import { EnvironmentSchema } from '@common/validation/schemas/env.schema';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { EAVModule } from './repository/eav/eav.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validationSchema: EnvironmentSchema
    }),
    EAVModule,
  ],
  controllers: [AppController],
})
export class AppModule { }
