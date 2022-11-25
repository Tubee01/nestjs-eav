import { ConfigService } from '@nestjs/config';
import {
  CONNECTION,
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
} from '@common/constants';
import { PoolManager } from './database-pool.service';

export const connectionFactory = {
  provide: CONNECTION,
  useFactory: (optionsProvider: ConfigService, manager: PoolManager) => {
    return manager.getCreateIfNotExistClient({
      host: optionsProvider.get(POSTGRES_HOST),
      port: optionsProvider.get(POSTGRES_PORT),
      user: optionsProvider.get(POSTGRES_USER),
      password: optionsProvider.get(POSTGRES_PASSWORD),
      database: optionsProvider.get(POSTGRES_DB),
    });
  },
  inject: [ConfigService, PoolManager],
};
