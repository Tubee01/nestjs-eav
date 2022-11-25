import { AppModule } from '@app/app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { APP_PORT } from '@common/constants';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  const configService = app.get(ConfigService);

  const config = new DocumentBuilder().setTitle('EAV').setVersion('0').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(configService.get(APP_PORT));

  const url = await app.getUrl();
  logger.log(`Application listening on port ${url}`);
  logger.log(`Swagger available on ${url}/swagger`);
}
bootstrap();
