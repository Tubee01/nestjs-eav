export interface Attribute {
  id: number;
  name: string;
  type: string;
  sub_type?: number;
  required: boolean;
  entity_id: number;
  created_at?: Date;
  updated_at?: Date;
}