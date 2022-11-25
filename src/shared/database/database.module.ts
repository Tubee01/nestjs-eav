import { CONNECTION } from '@common/constants';
import { Module } from '@nestjs/common';
import { PoolManager } from './database-pool.service';
import { connectionFactory } from './database.provider';


@Module({
  providers: [PoolManager, connectionFactory],
  exports: [CONNECTION],
})
export class DatabaseModule { }