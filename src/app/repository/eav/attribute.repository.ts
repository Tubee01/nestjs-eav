import { CONNECTION } from '@common/constants';
import { Inject, Injectable } from '@nestjs/common';
import { PoolClient } from 'pg';
import { CreateAttributeDTO } from './dtos/create-attribute.dto';
import { Attribute } from './interfaces/attribute.interface';

@Injectable()
export class AttributeRepository {
  constructor(@Inject(CONNECTION) private readonly connection: PoolClient) { }

  create(attribute: CreateAttributeDTO) {
    const query = `Insert into attribute (name, type, sub_type, required, entity_id) values ($1, $2, $3, $4, $5) returning *`;
    const values = [attribute.name, attribute.type, attribute.sub_type, attribute.required, attribute.entity_id];
    return this.connection.query(query, values);
  }

  update(attribute: Attribute) {
    const query = `Update attribute set name = $1, type = $2, sub_type = $3, required = $4, entity_id = $5 where id = $6 returning *`;
    const values = [
      attribute.name,
      attribute.type,
      attribute.sub_type,
      attribute.required,
      attribute.entity_id,
      attribute.id,
    ];
    return this.connection.query(query, values);
  }

  delete(id: number) {
    const query = `Delete from attribute where id = $1 returning *`;
    return this.connection.query(query, [id]);
  }
}
