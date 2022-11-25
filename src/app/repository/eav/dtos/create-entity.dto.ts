import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateEntityDTO {
  @ApiProperty()
  name: string;
  @ApiPropertyOptional()
  parent_id?: number;
  @ApiPropertyOptional()
  min_count?: number;
  @ApiPropertyOptional()
  max_count?: number;
}
