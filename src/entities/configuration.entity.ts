import { Prop, Schema } from '@nestjs/mongoose';
import  { Document } from 'mongoose';
import { BaseEntity } from 'src/utils/BaseEntity';
import { createSchema } from 'src/utils/createSchema';
import { Type } from './type.enum'


export type ConfigurationDocument = Configuration & Document;

@Schema({ timestamps: true, virtuals: true })
export class Configuration extends BaseEntity {
  @Prop({ required: true })
  key: string;

  @Prop({ required: true })
  value: string;

  @Prop({  required: true, type: String, enum: Type, default: Type.STRING })
  type: Type;

  @Prop({ required: true })
  group: string;
}

export const ConfigurationSchema = createSchema(Configuration);