import { CONNECTION } from '@common/constants';
import { Inject, Injectable } from '@nestjs/common';
import { PoolClient } from 'pg';
import { CreateEntityDTO } from './dtos/create-entity.dto';

@Injectable()
export class EntityRepository {
  constructor(@Inject(CONNECTION) private readonly connection: PoolClient) { }

  create(entity: CreateEntityDTO) {
    const { query, values } = this.buildInsertQuery([entity]);
    return this.connection.query(query, values);
  }


  private buildInsertQuery(entity) {
    const query = `Insert into entity (name, min_count, max_count) values ($1, $2, $3) returning *`;
    const values = [entity.name, entity.min_count, entity.max_count];
    return { query, values };
  }

}