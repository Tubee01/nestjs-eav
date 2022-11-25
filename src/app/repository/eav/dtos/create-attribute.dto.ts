import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAttributeDTO {
  @ApiProperty()
  name: string;
  @ApiProperty()
  type: string;
  @ApiPropertyOptional()
  sub_type?: number;
  @ApiProperty()
  required: boolean;
  @ApiProperty()
  entity_id: number;
}
