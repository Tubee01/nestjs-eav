import { Module } from '@nestjs/common';
import { DatabaseModule } from '@shared/database/database.module';
import { AttributeRepository } from './attribute.repository';
import { EntityRepository } from './entity.repository';

@Module({
  imports: [DatabaseModule],
  providers: [AttributeRepository, EntityRepository],
  exports: [AttributeRepository, EntityRepository],
})
export class EAVModule { }