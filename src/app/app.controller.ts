import { Body, Controller, Get, Post } from '@nestjs/common';
import { AttributeRepository } from './repository/eav/attribute.repository';
import { CreateAttributeDTO } from './repository/eav/dtos/create-attribute.dto';
import { EntityRepository } from './repository/eav/entity.repository';

@Controller()
export class AppController {
  constructor(private readonly attributeRepo: AttributeRepository, private readonly entityRepo: EntityRepository) {}

  @Post('attribute')
  async createAttribute(@Body() body: CreateAttributeDTO) {
    const attribute = await this.attributeRepo.create(body);
    return attribute;
  }

  @Post('entity')
  async createEntity(@Body() body: CreateAttributeDTO) {
    const entity = await this.entityRepo.create(body);
    return entity;
  }
}
